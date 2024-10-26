const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// Endpoint to collect user input
app.post('/user', async (req, res) => {
    const { name, age, color } = req.body;

    try {
        // Send data to pipeline 2 (RDS script)
        await axios.post('http://localhost:4000/store', { name, age, color });
        res.status(200).send('Data sent to RDS pipeline');
    } catch (error) {
        res.status(500).send('Failed to send data');
    }
});

app.listen(PORT, () => {
    console.log(`Node app running at http://localhost:${PORT}`);
});
