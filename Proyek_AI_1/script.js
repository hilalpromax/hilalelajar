// Fungsi untuk menghasilkan warna heksadesimal acak (tidak berubah)
function generateRandomColor() {
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
    return randomColor;
}

// Mendapatkan elemen teks, tombol, dan INPUT (tidak berubah)
const teksUtama = document.getElementById('teks-utama');
const tombolWarna = document.getElementById('tombol-warna');
const inputTeks = document.getElementById('input-teks');

// LOGIKA INPUT REAL-TIME (tidak berubah)
inputTeks.addEventListener('input', function() {
    teksUtama.textContent = inputTeks.value;
    
    // Opsional: Jika input kosong, kembalikan ke teks default
    if (inputTeks.value === "") {
        teksUtama.textContent = "Selamat Datang, AI Programmer!";
    }
});

// LOGIKA TOMBOL WARNA (ADA MODIFIKASI)
tombolWarna.addEventListener('click', function() {
    // 1. UBAH WARNA (Fungsi Asli)
    const newColor = generateRandomColor();
    teksUtama.style.color = newColor;

    // 2. SEMBUNYIKAN TOMBOL (MODIFIKASI BARU)
    tombolWarna.style.display = 'none'; // Menyembunyikan tombol

    // 3. ATUR WAKTU UNTUK MENAMPILKAN KEMBALI
    setTimeout(function() {
        // Fungsi ini akan dijalankan setelah 1500 milidetik (1.5 detik)
        tombolWarna.style.display = 'inline-block'; // Menampilkan tombol kembali
    }, 1500); // Waktu delay dalam milidetik
});