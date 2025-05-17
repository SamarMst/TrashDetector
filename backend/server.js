const express = require('express');
const cors = require('cors');
const multer = require('multer');
const axios = require('axios');
const fs = require('fs');
const FormData = require('form-data');
const path = require('path');

const app = express();
const PORT = 4000;

const uploadsDir = './uploads';
if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir);
}

app.use(cors());
app.use(express.json());

const upload = multer({ dest: 'uploads/' });

app.post('/api/predict', upload.single('image'), async (req, res) => {
    const imagePath = req.file.path;

    try {
        const formData = new FormData();
        formData.append('image', fs.createReadStream(imagePath));

        const response = await axios.post('http://127.0.0.1:5000/predict', formData, {
            headers: formData.getHeaders()
        });

        fs.unlinkSync(imagePath);  // Clean up after reading

        res.json(response.data);
    } catch (error) {
        console.error('Prediction error:', error.message);
        if (fs.existsSync(imagePath)) fs.unlinkSync(imagePath); // Safe delete
        res.status(500).json({ error: 'Prediction failed' });
    }
});

app.listen(PORT, () => {
    console.log(`Express server running on http://localhost:${PORT}`);
});
