
// Mengubah password menjadi random number agar tidak bisa di hack
const bcrypt = require ('bcrypt');


//membuat kode hash untuk password
const hashing = async (password) => {
    const hashed = await bcrypt.hash(password, 8)

    console.log(hashed);
    return hashed; //direturn juga karena nilainya mau dipakai lagi //data typenya object
    
}
hashing ('attahalilintar')

const hashcheck = async (password, hashed) => {
    const isMatch = await bcrypt.compare(password, hashed)

    if(!isMatch) {
        return console.log('not Match');
        
    }

    console.log('match');
    
}

const password = 'attahalilintar';
const password2 = 'attahalilintar';

var hashed = hashing (password) //berupa object
hashed = hashed.toString() //kemudian diubah menjadi string agar bisa di compare
hashcheck(password, hashed)
