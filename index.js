const express = require('express');

const app = express();


app.get('/', (req, res) => {   
    res.send({ hi: 'there' });  // Fixed indentation and spacing
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
    console.log('Listening');
});