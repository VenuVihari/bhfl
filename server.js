const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require("cors");
//const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.post('/bfhl', (req, res) => {
    const { data } = req.body;

    if (!data || !Array.isArray(data)) {
        return res.status(400).json({ is_success: false, message: 'Invalid input' });
    }

    const numbers = data.filter(item => !isNaN(item));
    const alphabets = data.filter(item => isNaN(item));
    const lowercaseAlphabets = alphabets.filter(item => item === item.toLowerCase());
    const highestLowercaseAlphabet = lowercaseAlphabets.length > 0 ? 
        [lowercaseAlphabets.sort().pop()] : [];

    const response = {
        is_success: true,
        user_id: "venuvihari", 
        email: "venuviharib@gmail.com", 
        roll_number: "5232", 
        numbers: numbers,
        alphabets: alphabets,
        highest_lowercase_alphabet: highestLowercaseAlphabet
    };

    res.json(response);
});
app.get('/bfhl', (req, res) => {
    res.status(200).json({ operation_code: 1 });
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
