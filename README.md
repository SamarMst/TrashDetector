# 🗑️ Waste Classifier App

A smart waste classification app that identifies trash types (plastic, metal, glass, etc.) using a machine learning model. Built with **React** (frontend), **Express** (backend), and **Flask** (ML API with TensorFlow).

---

## 🌟 Features

- 🔍 Upload an image of waste and classify it instantly
- 🧠 Powered by a trained MobileNetV2 TensorFlow model
- ♻️ Detects categories like: plastic, metal, glass, and paper
- 💡 Modern UI built with React and Tailwind CSS
- 🔄 Full-stack communication using RESTful APIs

---

## 🛠️ Tech Stack

| Layer     | Technology      |
|-----------|------------------|
| Frontend  | React, Tailwind CSS |
| Backend   | Node.js, Express  |
| ML API    | Flask, TensorFlow |
| ML Model  | MobileNetV2 (Transfer Learning) |

---

## 🧪 How it Works

1. **User uploads an image** from the UI.
2. Image is sent to **Express backend**, stored temporarily.
3. Backend sends the image to the **Flask API**.
4. Flask model predicts the class of waste.
5. Response (class + confidence) is sent back to the frontend.

---

## 🚀 Installation

### 1. Clone the repo

```bash
git clone https://github.com/SamarMst/Waste-Classifier.git
cd Waste-Classifier
```
### 2. Frontend (React)

```bash
cd frontend
npm install
npm start
```
### 3. Backend (Express)

```bash
Copy
Edit
cd ../backend
npm install
npm start
```
### 4. Flask API (Python)
```bash
Copy
Edit
cd ../model
python -m venv venv
venv\Scripts\activate   # or source venv/bin/activate on Linux/Mac
pip install -r requirements.txt
python app.py
```

## 🧠 Model Info
Architecture: MobileNetV2

Input Size: 128x128x3

Trained on: TrashNet dataset: https://www.kaggle.com/datasets/feyyazkefe/trashnet/data
