const express = require('express');
const app = express();

const port = 8080;  
const index = require('./models');

app.get('/',(req,res) => {
    res.send('Hello Page');
})

app.listen(port, () => {
    console.log(`App is listening at http://localhost:${port}`);
})