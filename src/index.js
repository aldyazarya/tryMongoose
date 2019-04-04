const express = require ('express'); //server request and give response
const mongoose = require ('mongoose'); // access database mongodb

const User = require('./models/user');
const Tasks = require('./models/task');


mongoose.connect('mongodb://127.0.0.1:27017/jcmongoose', { //connect to db
    useNewUrlParser: true, //parsing url
    useCreateIndex: true // auto create id
})

const app = express()
const port = 2020
app.use(express.json()) //bodyParser.json()

app.get('/user', )









app.listen(port, () => {
    console.log("API Running on port", port);
})