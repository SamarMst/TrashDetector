from flask import Flask, request, jsonify
from flask_cors import CORS
from PIL import Image
import numpy as np
import os
from tensorflow.keras.models import load_model
app = Flask(__name__)
CORS(app)

# Trained MobileNetV2 Model
MODEL_PATH = r'C:\Users\lenovo\Documents\TrashDetector\model\static\waste.h5'
model = None

def load_model_from_path():
    global model
    try:
        model = load_model(MODEL_PATH)
        print(f"Model loaded successfully from: {MODEL_PATH}")
    except Exception as e:
        print(f"Error loading model from {MODEL_PATH}: {e}")

# Load the model when the Flask app starts
with app.app_context():
    load_model_from_path()

# Preprocessing Function 
TARGET_SIZE = (128, 128)
# Adjust based on your model's input size
def preprocess_image(image_path):
    try:
        img = Image.open(BytesIO(image_file.read()))
        img = img.resize(TARGET_SIZE)
        img_array = np.array(img) / 255.0
        img_array = np.expand_dims(img_array, axis=0)

        return img_array
    except Exception as e:
        print(f"Error preprocessing image {image_path}: {e}")
        return None

# Prediction Endpoint 
CLASS_LABELS = ['cardboard', 'glass', 'metal', 'paper', 'plastic', 'trash']

@app.route('/predict', methods=['POST'])
def predict_waste():
    if model is None:
        return jsonify({'error': 'Model not loaded'}), 503

    if 'image' not in request.files:
        return jsonify({'error': 'No image uploaded'}), 400

    image_file = request.files['image']
    if image_file.filename == '':
        return jsonify({'error': 'No image selected'}), 400

    try:
        from io import BytesIO
        img = Image.open(BytesIO(image_file.read()))
        img = img.resize(TARGET_SIZE)
        img_array = np.array(img) / 255.0
        img_array = np.expand_dims(img_array, axis=0)

        predictions = model.predict(img_array)
        predicted_class_index = np.argmax(predictions)
        predicted_label = CLASS_LABELS[predicted_class_index]
        confidence = float(predictions[0][predicted_class_index])

        return jsonify({'prediction': predicted_label, 'confidence': confidence}), 200

    except Exception as e:
        print(f"Prediction error: {e}")
        return jsonify({'error': str(e)}), 500


if __name__ == '__main__':
    app.run(debug=True, port=5000)
