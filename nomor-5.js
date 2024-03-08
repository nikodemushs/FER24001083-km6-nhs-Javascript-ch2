const dataPenjualanNovel = [
  {
    idProduct: "BOOK002421",
    namaProduk: "Pulang - Pergi",
    penulis: "Tere Liye",
    hargaBeli: 60000,
    hargaJual: 86000,
    totalTerjual: 150,
    sisaStok: 17,
  },
  {
    idProduct: "BOOK002351",
    namaProduk: "Selamat Tinggal",
    penulis: "Tere Liye",
    hargaBeli: 75000,
    hargaJual: 103000,
    totalTerjual: 171,
    sisaStok: 20,
  },
  {
    idProduct: "BOOK002941",
    namaProduk: "Garis Waktu",
    penulis: "Fiersa Besari",
    hargaBeli: 67000,
    hargaJual: 99000,
    totalTerjual: 213,
    sisaStok: 5,
  },
  {
    idProduct: "BOOK002941",
    namaProduk: "Laskar Pelangi",
    penulis: "Andrea Hirata",
    hargaBeli: 55000,
    hargaJual: 68000,
    totalTerjual: 20,
    sisaStok: 56,
  },
];

getInfoPenjualan = (dataPenjualan) => {
  if (dataPenjualan.constructor !== Array) {
    return "ERROR : Invalid Data Type";
  }
  if (dataPenjualan.constructor === Array) {
    //TOTAL UNTUNG
    const dataUntung = dataPenjualan.map(
      (item) =>
        item.hargaJual * item.totalTerjual -
        item.hargaBeli * (item.totalTerjual + item.sisaStok)
    );
    const sumTotalUntung = dataUntung.reduce(add, 0);
    function add(accumulator, a) {
      return accumulator + a;
    }
    const totalUntungVal = () => {
      return "Rp " + sumTotalUntung.toLocaleString();
    };
    //TOTAL MODAL
    const dataModal = dataPenjualan.map(
      (item) => item.hargaBeli * (item.totalTerjual + item.sisaStok)
    );
    const sumTotalModal = dataModal.reduce(add, 0);
    function add(accumulator, a) {
      return accumulator + a;
    }
    const totalModalVal = () => {
      return "Rp " + sumTotalModal.toLocaleString();
    };
    //PERSENTASE KEUNTUNGAN
    const persentaseKeuntunganVal = () => {
      return ((sumTotalUntung / sumTotalModal) * 100).toPrecision(4) + "%";
    };
    //MENENTUKAN ARRAY BUKU DENGAN PENJUALAN TERTINGGI
    const bukuTerlaris = () => {
      dataPenjualanTinggi = dataPenjualan.map((item) => item.totalTerjual);
      dataPenjualanTinggi.sort(function (a, b) {
        return a - b;
      });
      return dataPenjualanTinggi[dataPenjualanTinggi.length - 1];
    };
    const penjualanMax = dataPenjualan?.find((e, i) => {
      return e?.totalTerjual == bukuTerlaris();
    });

    //MEMANGGIL PENULIS TERLARIS
    //MEMANGGIL BUKU TERLARIS

    const dataBukuTerlaris = penjualanMax.namaProduk;

    //MENENTUKAN ARRAY BUKU DENGAN STOK TERENDAH
    const bukuTerburuk = () => {
      dataPenjualanRendah = dataPenjualan.map((item) => item.totalTerjual);
      dataPenjualanRendah.sort(function (a, b) {
        return b - a;
      });
      return dataPenjualanRendah[dataPenjualanRendah.length - 1];
    };
    const penjualanMin = dataPenjualan?.find((e, i) => {
      return e?.totalTerjual == bukuTerburuk();
    });
    //MEMANGGIL PENULIS TERBURUK
    const dataPenulisTerburuk = penjualanMin.penulis;
    //MEMANGGIL BUKU TERBURUK
    const dataBukuTerburuk = penjualanMin.namaProduk;

    //MENENTUKAN SISA STOK BUKU MIN
    const stokTerburuk = () => {
      dataStokRendah = dataPenjualan.map((item) => item.sisaStok);
      dataStokRendah.sort(function (a, b) {
        return b - a;
      });
      return dataStokRendah[dataStokRendah.length - 1];
    };
    const stokMin = dataPenjualan?.find((e, i) => {
      return e?.sisaStok == stokTerburuk();
    });

    //MEMANGGIL STOK TERBURUK
    const dataStokTerburuk = stokMin.namaProduk;

    //PENULIS TERLARIS
    const totalPenjualanPenulis = [];

    // Iterasi melalui setiap item penjualan dalam dataPenjualan
    dataPenjualan.forEach((item) => {
      // Mendeklarasikan variabel penulis dan totalTerjual dari setiap item
      const { penulis, totalTerjual } = item;

      // Mencari apakah penulis sudah ada dalam array totalPenjualanPenulis
      const existingItem = totalPenjualanPenulis.find(
        (a) => a.penulis === penulis
      );

      // Jika penulis sudah ada dalam array totalPenjualanPenulis
      if (existingItem) {
        // Menambahkan totalTerjual dari item saat ini ke totalTerjual yang sudah ada untuk penulis tersebut
        existingItem.totalTerjual += totalTerjual;
      } else {
        //jika tidak, maka tambahkan penulis ke array degan total terjualnya
        totalPenjualanPenulis.push({ penulis, totalTerjual });
      }
    });
    //disini menggunakan reduce untuk mendapatkan penulis dengan total terjual tertinggi
    const penulisTerlaris = totalPenjualanPenulis.reduce((acc, curr) => {
      return acc.totalTerjual > curr.totalTerjual ? acc : curr;
    });
    //OBJ JAWABAN
    const Jawaban = {
      totalKeuntungan: totalUntungVal(),
      totalModal: totalModalVal(),
      persentaseKeuntungan: persentaseKeuntunganVal(),
      produkBukuTerlaris: dataBukuTerlaris,
      penulisTerlaris: penulisTerlaris.penulis,
      produkBukuTerburuk: dataBukuTerburuk,
      penulisTerburuk: dataPenulisTerburuk,
      sisaStokBukuTerdikit: dataStokTerburuk,
    };
    return Jawaban;
  }
};
console.log(getInfoPenjualan(dataPenjualanNovel));
