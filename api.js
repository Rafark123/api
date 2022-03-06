const express = require('express');
const app = express();

app.use(express.json({limit: "50mb"}));
app.use(express.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));

app.post('/a', (req, res) => {
    console.log('Estou Aqui')
    res.send('shutdown  -s -t  1200')
})

app.listen(8080)