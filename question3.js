const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello!');
  });

app.get('/test', (req, res) => {
    res.json({ message: 'Express is working ! Nancy Romales'})
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
});