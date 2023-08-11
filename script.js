var ulang = true;
while (ulang) {
  var nilai1 = parseInt(prompt("masukan nilai pertama"));
  var opsi = prompt(" Pilih Opsi :\n+, -, *, /");
  var nilai2 = parseInt(prompt("masukan nilai kedua"));

  function hitung(nilai1, nilai2, opsi) {
    var hasil;
    if (opsi == "+") {
      hasil = nilai1 + nilai2;
    } else if (opsi == "-") {
      hasil = nilai1 - nilai2;
    } else if (opsi == "*") {
      hasil = nilai1 * nilai2;
    } else if (opsi == "/") {
      hasil = nilai1 / nilai2;
    } else {
      alert("Yang anda inputkan salah");
    }
    return hasil;
  }
  alert("Hasilnya : " + hitung(nilai1, nilai2, opsi));
  ulang = confirm("lagi...?");
}
alert("Terimakasih");
