
const functions = require('firebase-functions');
const admin = require('firebase-admin');
const express = require('express');
const cors = require('cors');
const { GoogleGenerativeAI } = require('@google/generative-ai');

admin.initializeApp();

const app = express();
app.use(cors({ origin: true }));

// Use a more secure way to handle API keys, e.g., environment variables
const geminiApiKey = functions.config().gemini.key;
const genAI = new GoogleGenerativeAI(geminiApiKey);

app.post('/api/chat', async (req, res) => {
    try {
        const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
        
        const userMessage = req.body.contents;
        const pageContext = req.body.context;

        // Create a more robust prompt
        const prompt = `Based ONLY on the following research paper content, answer the user's question.

        PAPER CONTENT:
        ---
        ${pageContext}
        ---
        
        USER QUESTION: ${userMessage}`;

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();
        
        // Send the response back in a simple JSON format
        res.json({ text });

    } catch (error) {
        console.error('Error in Gemini API call:', error);
        res.status(500).send('Error generating content from the model');
    }
});

exports.api = functions.https.onRequest(app);
