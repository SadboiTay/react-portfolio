const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('/*', (req, res) => {
    console.log('sending index.html')
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
    if (err) {
        res.status(500).send(err)
    }
});

app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
});