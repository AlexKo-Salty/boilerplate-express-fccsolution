require('dotenv').config();
let express = require('express');
let app = express();
let bodyParser = require('body-parser')

console.log('Hello World')

app.use(bodyParser.urlencoded({ extended: false }));

//Tutorial 7
app.use(function(req, res, next) {
    console.log(req.method + " " + req.path + " - " + req.ip);
    next();
});
  
//Tutorial 2
// app.get('/',function(req, res){
//   res.send('Hello Express')
// })

//Tutorial 3
app.get('/', function(req, res){
    res.sendFile(__dirname + "/views/index.html");
})

//Tutorial 4
app.use('/public', express.static(__dirname + "/public"));

//Tutorial 5 & 6
app.get('/json', function(req, res){
if (process.env.MESSAGE_STYLE === "uppercase")
{
    res.json({"message": "HELLO JSON"})
}
else {
    res.json({"message": "Hello json"})
}
})

//Tutorial 8
app.get('/now', function(req, res, next) {
    req.time = new Date().toString();
    next();
    }, function(req, res) {
        res.json({'time': req.time});
      });

//Tutorial 9
app.get('/:word/echo', function(req, res) {
    res.json({'echo': req.params.word});
})

//Tutorial 10,12
app.route('/name')
    .get((req, res) => {
        res.json({"name": req.query.first + " " + req.query.last})
    })
    .post((req, res) => {
        res.json({"name": req.body.first + " " + req.body.last })
    })

 module.exports = app;
