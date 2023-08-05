const express = require('express')
const bodyParser = require('body-parser')

const app = express()
// app.use(bodyParser)
// app.use(bodyParser.text())
// app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
})

// app.post("/", function(req, res){
app.post("/bmiCalc",function(req, res){
    // console.log(req.body)
    // console.log(req.body.num1)
    var x = Number(req.body.num1)
    var y = Number(req.body.num2)
    var z = x+y

    res.send("Sum = "+z);
})

// app.get("/bmiCalc",function(req, res){
//     res.sendFile(__dirname + "/bmi.html");
// })

// app.post("/bmiCalc",function(req, res){
//     var w = Number(req.body.wt)
//     var h = Number(req.body.ht)
//     var z = w/(h*h)

//     res.send("BMI = "+z);
// })
app.listen(3000,()=>console.log('HelloWorld App running on port 3000'))