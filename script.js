const nimInput = document.getElementById('nim');
const nimError = document.getElementById('nimError');
const form = document.getElementById('formPendaftaran');

// 1. Validasi NIM secara Real-time (Tidak bisa input huruf & harus 9 digit)
nimInput.addEventListener('input', function(e) {
    // Memaksa menghapus semua karakter yang bukan angka
    this.value = this.value.replace(/[^0-9]/g, '');

    // Cek panjang karakter
    if (this.value.length > 0 && this.value.length < 9) {
        nimError.textContent = 'NIM harus terdiri dari tepat 9 angka.';
    } else if (this.value.length === 9) {
        nimError.textContent = ''; // Kosongkan pesan error jika sudah pas
    }
});

// 2. Interaksi saat form dikirim (Konfirmasi & Validasi Akhir)
form.addEventListener('submit', function(e) {
    const nimValue = nimInput.value;
    
    // Cek kembali NIM jika user memaksa kirim saat kurang dari 9 digit
    if (nimValue.length !== 9) {
        e.preventDefault(); // Hentikan proses pengiriman
        alert('Mohon perbaiki NIM Anda. Harus terdiri dari 9 angka.');
        nimInput.focus();
        return;
    }

    // Munculkan dialog konfirmasi
    const konfirmasi = confirm("Apakah Anda yakin data yang diisi sudah benar dan ingin mengirimkannya?");
    
    // Jika user klik "Batal" (Cancel), hentikan pengiriman
    if (!konfirmasi) {
        e.preventDefault();
    }
    // Jika user klik "OK", form akan otomatis lanjut ke proses.php
});