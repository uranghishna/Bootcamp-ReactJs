    const myCountPromise = (num) => {
        return new Promise( (resolve, reject) => {
                if(num !== undefined){
                    resolve(setTimeout( () => { 
                        const result = num*2;
                        return result;
                    },3000))    
                } 
                else{
                    reject("Maaf tidak ada nilai dalam parameter")
                }
            })
        }
    myCountPromise(2)
    .then((result) => {
        console.log(result)
    })
    .catch((error) => {
        console.log(error)
    })
    