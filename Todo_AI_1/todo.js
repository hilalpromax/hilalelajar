// Deklarasi variabel di scope global untuk akses mudah (jika diperlukan)
let tasks = [];
const LS_KEY = 'tasks-v2'; // Kunci Local Storage

// ----------------------------------------------------------------------
// 1. FUNGSI LOGIKA (Mengelola data)
// ----------------------------------------------------------------------

function loadTasks() {
    // Memuat data dari Local Storage
    const storedTasks = localStorage.getItem(LS_KEY);
    tasks = storedTasks ? JSON.parse(storedTasks) : [];
}

function saveTasks() {
    // Menyimpan data ke Local Storage
    localStorage.setItem(LS_KEY, JSON.stringify(tasks));
}

function addTask(taskText) {
    if (taskText.trim() !== "") {
        tasks.push(taskText.trim()); // Tambahkan ke data
        saveTasks();
        return true; // Beri tahu bahwa penambahan berhasil
    }
    return false;
}

function deleteTask(index) {
    tasks.splice(index, 1); // Hapus dari data
    saveTasks();
}

// ----------------------------------------------------------------------
// 2. FUNGSI TAMPILAN (Mengelola DOM)
// ----------------------------------------------------------------------

function renderTasks() {
    const daftarTugas = document.getElementById('daftar-tugas');
    daftarTugas.innerHTML = ''; // Kosongkan tampilan

    tasks.forEach((task, index) => {
        const listItem = document.createElement('li');
        listItem.dataset.index = index; // Menambahkan atribut data-index ke LI

        // Isi teks tugas
        listItem.innerHTML = `
            <span>${task}</span>
            <button class="delete-btn">Hapus</button>
        `;
        
        daftarTugas.appendChild(listItem);
    });
}

// ----------------------------------------------------------------------
// 3. FUNGSI INISIALISASI & DELEGASI EVENT
// ----------------------------------------------------------------------

function init() {
    const inputTugas = document.getElementById('input-tugas');
    const tombolTambah = document.getElementById('tombol-tambah');
    const daftarTugas = document.getElementById('daftar-tugas');

    // Memuat data dan merender saat pertama kali dimuat
    loadTasks();
    renderTasks();

    // Event Listener Tambah Tugas
    tombolTambah.addEventListener('click', () => {
        if (addTask(inputTugas.value)) {
            inputTugas.value = ''; // Kosongkan input
            renderTasks();
        }
    });
    
    // Event Listener Enter
    inputTugas.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            if (addTask(inputTugas.value)) {
                inputTugas.value = '';
                renderTasks();
            }
        }
    });

    // EVENT DELEGATION (Modifikasi Utama)
    daftarTugas.addEventListener('click', (e) => {
        const target = e.target;
        
        // Cek apakah target klik adalah tombol Hapus
        if (target.classList.contains('delete-btn')) {
            const listItem = target.closest('li'); // Cari elemen LI terdekat (tugas)
            const index = parseInt(listItem.dataset.index); // Ambil index dari atribut data-index

            deleteTask(index); // Hapus dari data
            renderTasks();     // Render ulang tampilan
        }
    });
}

// Panggil fungsi inisialisasi untuk menjalankan aplikasi
init();