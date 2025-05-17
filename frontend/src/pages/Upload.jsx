import React, { useState } from 'react';
import axios from 'axios';
function Upload({ onPredict }) {
  const [image, setImage] = useState(null);
  const [result, setResult] = useState(null);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!image) return;

    const formData = new FormData();
    formData.append("image", image);

    try {
      const response = await fetch("http://localhost:5000/predict", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      setResult(data);

      // Send prediction up to Hero1
      if (onPredict) {
        onPredict(data.prediction);
      }
    } catch (error) {
      console.error("Prediction error:", error);
    }
  };

  return (
    <div className="p-4">
      <form onSubmit={handleSubmit} className="flex items-center space-x-4">
        <input
          type="file"
          onChange={handleImageChange}
          accept=".png,.jpg"
          className="border rounded px-2 py-1"
        />
        <button
          type="submit"
          className="flex items-center space-x-2 bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded"
        >
          <img src="./images/search.png" alt="Search" className="h-6 w-6" />
          <span>Search</span>
        </button>
      </form>

      {result && (
        <div className="mt-4">
          <h3 className="text-lg font-semibold">
            Prediction: {result.prediction}
          </h3>
          <p>Confidence: {(result.confidence * 100).toFixed(2)}%</p>
        </div>
      )}
    </div>
  );
}
export default Upload;
