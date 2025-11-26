// 1. Mendapatkan Elemen dari HTML (Tidak Berubah)
const counterElement = document.getElementById('nilai-counter');
const addButton = document.getElementById('tombol-tambah');
const resetButton = document.getElementById('tombol-reset');

// FUNGSI BARU: Menyimpan nilai counter ke LocalStorage
function saveCounter() {
    // LocalStorage hanya bisa menyimpan String, jadi kita ubah angka menjadi String.
    localStorage.setItem('myCounterValue', count.toString());
}

// 2. Definisikan Variabel Data (State) DENGAN LOGIKA LOCAL STORAGE
// Ambil nilai dari LocalStorage. Jika tidak ada (null), maka gunakan 0.
let storedCount = localStorage.getItem('myCounterValue');

// Periksa apakah ada nilai yang tersimpan dan ubah dari String ke Integer.
let count = storedCount ? parseInt(storedCount) : 0; 
// Jika storedCount ada, count = parseInt(storedCount). Jika tidak, count = 0.

// 3. Fungsi untuk Memperbarui Tampilan (Rendering) (Tidak Berubah)
function updateDisplay() {
    counterElement.textContent = count;
}

// 4. Logika Tombol Tambah (MODIFIKASI)
addButton.addEventListener('click', function() {
    count++; 
    updateDisplay(); 
    saveCounter(); // BARU: Simpan nilai baru ke Local Storage
});

// 5. Logika Tombol Reset (MODIFIKASI)
resetButton.addEventListener('click', function() {
    count = 0; 
    updateDisplay(); 
    saveCounter(); // BARU: Simpan nilai 0 ke Local Storage
});

// Panggil fungsi ini sekali agar nilai yang tersimpan (jika ada) tampil saat pertama kali dimuat
updateDisplay();