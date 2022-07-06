        //soal 1 ( Latihan Membuat variable dan valuenya )
        let namaLengkap = "Hishna Difa Ismail";
        console.log(namaLengkap);

        //soal 2 ( Latihan Penggabungan variable )
        let word = 'JavaScript'; 
        let second = 'is'; 
        let third = 'awesome'; 

        let outputGabunganVariable = word+' '+second+' '+third;
        console.log(outputGabunganVariable);

        //soal 3 ( Latihan Menggunakan Template Literals)
        let hello = 'Hello '; 
        let world = 'World!!'; 

        console.log(`${hello} ${world}`);

        //soal 4 ( Latihan Mengubah tipe data )
        let panjangPersegiPanjang = "8";
        let lebarPersegiPanjang = "5";
        let strpanjangPersegiPanjang = parseInt(panjangPersegiPanjang)
        let strlebarPersegiPanjang = parseInt(lebarPersegiPanjang)
        let kelilingPersegiPanjang = 2 * ( strpanjangPersegiPanjang + strlebarPersegiPanjang );
        console.log(kelilingPersegiPanjang);


        //soal 5 ( Latihan Mengurai Kalimat )
        let sentences= 'wah javascript itu keren sekali'; 

        let firstWords= sentences.substring(0, 3); 
        let secondWords= sentences.substring(4, 14); 
        let thirdWords= sentences.substring(15, 18);
        let fourthWords= sentences.substring(19, 24);  
        let fifthWords= sentences.substring(25, 31);

        console.log('Kata Pertama:' + firstWords); 
        console.log('Kata Kedua:' + secondWords); 
        console.log('Kata Ketiga:' + thirdWords); 
        console.log('Kata Keempat:' + fourthWords); 
        console.log('Kata Kelima:' + fifthWords);

        //soal 6 (Akses karakter dalam string)
        var sentence = "I am going to be React JS Developer"; 

        var exampleFirstWord = sentence.substr(0,1) ; 
        var exampleSecondWord = sentence.substr(2,2); 
        var thirdWord = sentence.substr(5,5); 
        var fourthWord = sentence.substr(11,2); 
        var fifthWord = sentence.substr(14,2);
        var sixthWord =sentence.substr(17,5); 
        var seventhWord =sentence.substr(23,2); 
        var eighthWord =sentence.substr(26); 

        console.log('First Word: ' + exampleFirstWord); 
        console.log('Second Word: ' + exampleSecondWord); 
        console.log('Third Word: ' + thirdWord); 
        console.log('Fourth Word: ' + fourthWord); 
        console.log('Fifth Word: ' + fifthWord); 
        console.log('Sixth Word: ' + sixthWord); 
        console.log('Seventh Word: ' + seventhWord); 
        console.log('Eighth Word: ' + eighthWord);

        //soal 7 ( Latihan Mengambil sebuah Kalimat )
        let txt = "I can eat bananas all day";
        let hasil = txt.slice(10, 17);

        console.log(hasil);

        //soal 8 ( membuat kondisi sederhana )
        var nilaiDoe = 50;

        if(nilaiDoe >= 80 ){
            indeksnya ="A";
        }
        else if(nilaiDoe >= 70 && nilaiDoe < 80){
            indeksnya ="B";
        }
        else if(nilaiDoe >= 60 && nilaiDoe < 70 ){
            indeksnya ="C";
        }
        else if(nilaiDoe >= 50 && nilaiDoe < 60){
            indeksnya ="D";
        }
        else if(nilaiDoe < 50){
            indeksnya ="E";
        }

        else{
            indeksnya="Nilai Error";
        }

        console.log(indeksnya);

        //soal 9 ( conditional tipe tenary operator )
        let angka = 2

        angka === 2 ? console.log("angka nya 2") : console.log("bukan angka 2");

        //soal 10 ( conditional tipe Switch Case )
        var traffic_lights = "red";
        switch(traffic_lights) {
        case "red":   {console.log('berhenti'); break; }
        case "yellow":   { console.log('hati-hati'); break; }
        case "green":   { console.log('berjalan'); break; }
        default : {console.log('error')}
        } 