// Format saldo ke format Rupiah
function formatRupiah(amount) {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(amount);
}

// Ambil data transaksi dari LocalStorage
let transactions = JSON.parse(localStorage.getItem('transactions')) || [];
let transactionList = document.getElementById('transaction-list');

// Tampilkan transaksi
transactions.forEach((transaction) => {
    let listItem = document.createElement('li');
    listItem.textContent = `${transaction.date}: ${transaction.type} ${formatRupiah(transaction.amount)} ke ${transaction.recipient}`;
    transactionList.appendChild(listItem);
});

