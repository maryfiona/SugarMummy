const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

app.post('/save-location', (req, res) => {
    const locationData = req.body;
    console.log('Received location data:', locationData);

    // Here you can save the location data to a database or perform other actions

    res.json({ message: 'Location saved successfully' });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
