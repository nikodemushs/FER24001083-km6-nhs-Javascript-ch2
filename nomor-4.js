const dataPenjualanPakAldi = [
  {
    namaProduct: "Sepatu Futsal Nike Vapor Academy 8",
    hargaSatuan: 760000,
    kategori: "Sepatu Sport",
    totalTerjual: 90,
  },
  {
    namaProduct: "Sepatu Warrior Tristan Black Brown High",
    hargaSatuan: 960000,
    kategori: "Sepatu Sneaker",
    totalTerjual: 37,
  },
  {
    namaProduct: "Sepatu Warrior Tristan Maroon High ",
    kategori: "Sepatu Sneaker",
    hargaSatuan: 360000,
    totalTerjual: 90,
  },
  {
    namaProduct: "Sepatu Warrior Rainbow Tosca Corduroy",
    hargaSatuan: 120000,
    kategori: "Sepatu Sneaker",
    totalTerjual: 90,
  },
];

function hitungTotalPenjualan(dataPenjualan) {
  if (dataPenjualan.constructor !== Array) {
    return "ERROR : Invalid Data Type";
  }
  if (dataPenjualan.constructor === Array) {
    let data = dataPenjualanPakAldi.map((item) => item.totalTerjual);
    // let sum = 0;
    // for (let i = 0; i < data.length; i++) {
    //   sum += data[i];                        //  METODE FOR UTK MENJUMLAHKAN
    // }

    // return sum;
    let sum = data.reduce((prev, curr) => {
      return prev + curr;
    }, 0);
    return "TOTAL = " + sum;
  }
}

console.log(hitungTotalPenjualan(dataPenjualanPakAldi));
