const express = require ('express'); //server request and give response
const mongoose = require ('mongoose'); // access database mongodb
const validator = require('validator');

mongoose.connect('mongodb://127.0.0.1:27017/jcmongoose', { //connect to db
    useNewUrlParser: true, //parsing url
    useCreateIndex: true // auto create id
})

const app = express()
const port = 2020


const User = mongoose.model ('User', {
    name: {
        type: String,
        required: true,
        trim: true, //untuk menghilangkan spasi pada saat user memasukkan spasi saat pengisian
        lowercase: true,
        validate(value) { // untuk mengecek jika user memasukkan angka ke dalam nama, maka kita akan mengirimkan  pesan error
            value = parseInt(value)
            if (!isNaN(value)) {
                throw new Error("nama tidak boleh berupa nomor")
            }
        }
    },
    email: {
        type: String,
        required: true,
        validate(value) {
            if(!validator.isEmail(value)) {
                throw new Error ("email tidak valid")
            }
        }
        
    },
    age: {
        type: Number,
        required: true,
        validate(value){
            if(value<18){
                throw new Error('Umur tidak boleh negatif')
            }
        }
    },
    password: {
        type: String,
        required: true,
        trim: true,
        validate(value) {
            if(value.toLowerCase().includes("password")) {
                throw new Error ("tidak boleh mengandung kata password ")
            }
        }
    }
})

const user = new User({
    name: "atta halilintar",
    email: "atta.halilintar@ashiap.com",
    age: 23,
    password: "123"
})
user.save() //alternative daripada menggunakan db.collection untuk menginput data ke database robot
console.log(user);





app.listen(port, () => {
    console.log("API Running on port", port);
})