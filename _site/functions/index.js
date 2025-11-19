const functions = require('firebase-functions');
const admin = require('firebase-admin');
const express = require('express');
const cors = require('cors');
const { GoogleGenerativeAI } = require('@google/generative-ai');

admin.initializeApp();

const app = express();
app.use(cors({ origin: true }));

// Get your Gemini API key from Firebase environment variables
const geminiApiKey = functions.config().gemini.key;
const genAI = new GoogleGenerativeAI(geminiApiKey);

app.post('/chat', async (req, res) => {
    try {
        const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
        const result = await model.generateContent(req.body.contents);
        res.json(result.response);
    } catch (error) {
        console.error('Error in Gemini API call:', error);
        res.status(500).send('Error generating content');
    }
});

exports.api = functions.https.onRequest(app);
