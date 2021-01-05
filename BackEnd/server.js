const express = require('express')
const app = express()
const port = 4000
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');


app.use(cors());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(express.static(path.join(__dirname, '../build')));
app.use('/static', express.static(path.join(__dirname, 'build/static')));

// parse application/x-www-form-urlencoded
// Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const strConnection = 'mongodb+srv://Ciaran:mufc4ever@cluster0.dlmz4.mongodb.net/MyFilms?retryWrites=true&w=majority';
mongoose.connect(strConnection, {useNewUrlParser: true});

const Schema = mongoose.Schema;
const exerciseSchema = new Schema({
    Title:String,
    Muscle:String,
    Poster:String,
})

const exerciseModel = mongoose.model('exercise', exerciseSchema);

//Listening for get request from domain
app.get('/', (req, res) => {
    res.send('Hello World!')
})

//Changed the url to return that parameter
app.get('/api/exercises', (req, res) => {
    
    exerciseModel.find((err,data)=>{
        res.json(data);
    })
    
    
})

//Retrieves data from url
app.get('/api/exercises/:id',(req, res)=>{

    console.log(req.params.id);

    exerciseModel.findById(req.params.id, (err,data)=>{
        res.json(data);
    })
})

app.put('/api/exercises/:id',(req,res)=>{
    console.log("Update "+req.params.id);

    exerciseModel.findByIdAndUpdate(req.params.id,
        req.body,
        (err,data)=>{
            res.status(201).send(data);
        })
})

app.delete('/api/exercises/:id', (req, res)=>{
    console.log(req.params.id);

    exerciseModel.findByIdAndDelete({_id:req.params.id},
         (err, data)=>{
        res.send(data);
    })
})


app.post('/api/exercises', (req, res) => {
    console.log(req.body);

    exerciseModel.create({
        Title:req.body.Title,
        Muscle:req.body.Muscle,
        Poster:req.body.Poster
    })
    .then()
    .catch();

    res.send('Data Recieved!');
})

//Retrieves data from index.html file by using 'path'
app.get('*', (req,res)=>{
    res.sendFile(path.join(__dirname+'/../build/index.html'));
})
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})