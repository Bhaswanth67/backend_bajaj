const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());

const user = {
    user_id: 'Bhaswanth67',
    email: 'bonthala.bhaswanth2021@vitstudent.ac.in',
    roll_number: '21BIT0299'
};

// POST endpoint
app.post('/bfhl', (req, res) => {
    const data = req.body.data;
    if (!data || !Array.isArray(data)) {
        return res.status(400).json({ is_success: false, message: 'Invalid input' });
    }

    const numbers = data.filter(item => !isNaN(item)).map(Number); // Filter numbers
    const alphabets = data.filter(item => isNaN(item)); // Filter alphabets
    const lowercaseAlphabets = alphabets.filter(item => item === item.toLowerCase()); // Filter lowercase alphabets
    const highestLowercaseAlphabet = lowercaseAlphabets.length > 0 ? [lowercaseAlphabets.sort().slice(-1)[0]] : [];

    res.json({
        is_success: true,
        user_id: user.user_id,
        email: user.email,
        roll_number: user.roll_number,
        numbers: numbers, // Keep as array
        alphabets: alphabets, // Keep as array
        highest_lowercase_alphabet: highestLowercaseAlphabet // Keep as array
    });
});

// GET endpoint
app.get('/bfhl', (req, res) => {
    res.json({ operation_code: 1 });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
