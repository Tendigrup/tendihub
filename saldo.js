// Fungsi untuk membuat alamat wallet unik
function generateWalletAddress() {
    const timestamp = Date.now().toString(36); // Waktu dalam format base36
    const randomValue = Math.random().toString(36).substr(2, 5).toUpperCase(); // Nilai random
    return `0x${timestamp}${randomValue}`;
}

// Cek apakah pengguna sudah memiliki alamat wallet
let walletAddress = localStorage.getItem('walletAddress');
if (!walletAddress) {
    walletAddress = generateWalletAddress();
    localStorage.setItem('walletAddress', walletAddress);
}

// Ambil saldo dari LocalStorage
let balance = parseFloat(localStorage.getItem('balance') || 0);

// Format saldo ke format Rupiah
function formatRupiah(amount) {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(amount);
}

// Tampilkan alamat wallet dan saldo
document.getElementById('wallet-address').textContent = walletAddress;
document.getElementById('balance').textContent = formatRupiah(balance);

// Simpan data wallet dan saldo
function saveData() {
    localStorage.setItem('walletAddress', walletAddress);
    localStorage.setItem('balance', balance.toFixed(2));
    checkStorageLimit();
}

// Fungsi untuk top-up saldo
function topUp() {
    let amount = parseFloat(prompt('Masukkan jumlah top-up (contoh: 100000):'));
    if (!isNaN(amount) && amount > 0) {
        balance += amount;
        saveTransaction('Top-Up', walletAddress, amount);
        saveData();
        alert(`Top-Up berhasil sebesar ${formatRupiah(amount)}!`);
        document.getElementById('balance').textContent = formatRupiah(balance);
    } else {
        alert('Jumlah tidak valid.');
    }
}

// Fungsi untuk transfer saldo
function transfer() {
    let recipient = prompt('Masukkan alamat wallet penerima:');
    let amount = parseFloat(prompt('Masukkan jumlah transfer (contoh: 50000):'));
    if (!isNaN(amount) && amount > 0 && amount <= balance) {
        balance -= amount;
        saveTransaction('Transfer', recipient, amount);
        saveData();
        alert(`Transfer sebesar ${formatRupiah(amount)} berhasil ke alamat ${recipient}!`);
        document.getElementById('balance').textContent = formatRupiah(balance);
    } else {
        alert('Transfer gagal. Pastikan saldo mencukupi.');
    }
}

// Fungsi untuk menyimpan transaksi
function saveTransaction(type, recipient, amount) {
    let transactions = JSON.parse(localStorage.getItem('transactions')) || [];
    transactions.push({
        type: type,
        recipient: recipient,
        amount: amount,
        date: new Date().toLocaleString()
    });
    localStorage.setItem('transactions', JSON.stringify(transactions));
}

// Periksa penyimpanan melebihi batas
function checkStorageLimit() {
    let totalSize = new Blob(Object.values(localStorage)).size;
    if (totalSize > 5 * 1024 * 1024) {
        alert('Penyimpanan penuh. Data transaksi lama akan dihapus.');
        localStorage.removeItem('transactions'); // Hapus data transaksi lama
    }
}
