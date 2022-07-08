// soal 1
    for (let i=0;i<10;i++){
        console.log(i);
    }

    // soal 2
    for (let i=0;i<10;i++){
        if (i%2===1){    
            console.log(i);
        }
    }

    // soal 3
    for (let i=0;i<10;i++){
        if (i%2===0){    
            console.log(i);
        }
    }

    // soal 4
    let array1 = [1,2,3,4,5,6];
    console.log(array1[5]);

    // soal 5
    let array2 = [5,2,4,1,3,5];
    array2.sort();
    console.log(array2);

    // Soal 6
    // let array3 = ["selamat", "anda", "melakukan", "perulangan", "array", "dengan", "for"];
    // for(i=0;i<array3.length;i++){
    //     console.log(array3[i]);
    // }
    let array4 = ["selamat", "anda", "melakukan", "perulangan", "array", "dengan", "for"];
    for (const iterator of array4) {
        console.log(iterator)
    }

    // Soal 7
    let array5 = [1, 2, 3, 4, 5, 6,7, 8, 9, 10];
    for(i=0;i<array5.length;i++){
        if(array5[i]%2===0){
            console.log(array5[i]);
        }
    }

    // Soal 8
    let kalimat= ["saya", "sangat", "senang", "belajar", "javascript"];
    let gabungan=kalimat.join(" ");
    console.log(gabungan);

    // soal 9
    var sayuran=[];
    sayuran.push("Kangkung");
    sayuran.push("Bayam");
    sayuran.push("Buncis");
    sayuran.push("Kubis");
    sayuran.push("Timun");
    sayuran.push("Seledri");
    sayuran.push("Tauge");
    console.log(sayuran);