const mongoose = require('mongoose');
const validator = require('validator/lib/isEmail');

const userSchema = new mongoose.Schema({
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
            if(!isEmail(value)) {
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



const User = mongoose.model ('User', userSchema )

module.exports = User

// const user = new User({
//     name: "atta halilintar",
//     email: "atta.halilintar@ashiap.com",
//     age: 23,
//     password: "123"
// })
// user.save() //alternative daripada menggunakan db.collection untuk menginput data ke database robot
// console.log(user);
