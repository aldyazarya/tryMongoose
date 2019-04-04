
// async await (ES7), untuk handle promise lebih mudah dan efisien

//promise
const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (a < 0 || b < 0){
                return reject ("number tidak boleh lebih kecil daripada nol")
            }

            resolve(a+b)
        }, 3000);
    })
}

// add(0,2).then(res => { // resolve akan lari ke then (berarti berhasil)
//     console.log("hasil jumlah", res);

    
// }).catch(e => { //reject akan lari ke catch (berarti ada yang error)
//     console.log(e);
    
// })

//penggunaan async
const funB = async() => {
    const sum = await add(4,5)
    const sum1 = await add(sum,10)
    const sum2 = await add(sum1,10)

    return sum2
}

funB().then (res => {
    console.log("result",res);
    
}).catch (e => {
    console.log("error", e);
    
})




// const getData = (array) => {
//     return new Promise ((resolve, reject) => {
//         setTimeout(() => {
//             var dataX = array

//             if(dataX.length === 0) {
//                 return reject ({
//                     err: "data tidak ditemukan",
//                     data: dataX
//                 })
//             }

//             resolve({
//                 mess: "data berhasil ditemukan",
//                 data: dataX
//             })
//         }, 3000);
//     })
// }

// const arrayIsi = ['senin', 'selasa', 'rabu', 'kamis']
// const arrayKosong = []

// getData(arrayKosong).then (res => {
//     console.log(res.data);
// }).catch ( e => {
//     console.log(e);
    
// })


