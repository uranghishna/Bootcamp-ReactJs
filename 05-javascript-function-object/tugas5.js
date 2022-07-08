    //Nomor 1
    function cetakFunction(){
        return "Hallo nama saya, Hishna Difa Ismail";
    }
    console.log(cetakFunction());

    //Nomor 2
    function myFunction(angka1, angka2){
       return angka1+angka2;
    }
    let angka1 = 20;
    let angka2 = 7;
    let output = myFunction(angka1, angka2);
    console.log(output);

    //Nomor 3
    const hello = ()=>{
    return "Hello"
    }
    console.log(hello());

    //Nomor 4
    let obj = {
    nama : "john",
    umur : 22,
    bahasa : "indonesia"
    }
    console.log(obj.bahasa);

    //Nomor 5
    let arrayDaftarPeserta = ["John Doe", "laki-laki", "baca buku" , 1992]
    let objDaftarPeserta = {
        nama : arrayDaftarPeserta[0],
        gender : arrayDaftarPeserta[1],
        hobi : arrayDaftarPeserta[2],
        tahun : arrayDaftarPeserta[3],
    }
    console.log(objDaftarPeserta);

    //Nomor 6
    let buah = [
        {
        nama: "Nanas",
        warna: "Kuning",
        bijinya: "tidak",
        harga: 9000
        },
        {
        nama: "Jeruk",
        warna: "Oranye",
        bijinya: "ada",
        harga: 8000
        },
        {
        nama: "Semangka",
        warna: "Hijau & Merah",
        bijinya: "ada",
        harga: 10000
        },
        {
        nama: "Pisang",
        warna: "Kuning",
        bijinya: "tidak",
        harga: 5000
        }
    ]
        var buahBiji =  buah.filter(function(biji) {
        return biji.bijinya == "tidak";
    });
    console.log(buahBiji);

    //Nomor 7
    let phone = {
    name: "Galaxy Note 20",
    brand: "Samsung",
    year: 2020
    }
    const { name, brand, year } = phone;
    console.log(name, brand, year);

    //Nomor 8
    let dataBukuTambahan= {
    penulis: "john doe",
    tahunTerbit: 2020 
    }
    let buku = {
    nama: "pemograman dasar",
    jumlahHalaman: 172
    }
    let objOutput = {...dataBukuTambahan,...buku}
    console.log(objOutput)

    //Nomor 9
    let mobil = {
    merk : "bmw",
    color: "red",
    year : 2002
    }
    const functionObject = (param) => {
        return param
    }
    console.log(functionObject(mobil))
   