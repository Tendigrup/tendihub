// Fungsi untuk menyimpan transaksi ke localStorage
const simpanTransaksi = (jenis, jumlah) => {
  const transaksiData = JSON.parse(localStorage.getItem('transaksi')) || [];
  const transaksiBaru = {
    jenis,
    jumlah,
    waktu: new Date().toLocaleString('id-ID'),
  };
  transaksiData.push(transaksiBaru);
  localStorage.setItem('transaksi', JSON.stringify(transaksiData));
};
// Generate Random Wallet Address
  const generateWalletAddress = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqr>
    let address = '0x';
    for (let i = 0; i < 40; i++) {
      address += chars[Math.floor(Math.random() * chars.length)>
    }
    return address;
  };

  walletAddressElement.textContent = generateWalletAddress();
  saldoElement.textContent = `Rp ${saldo.toLocaleString()}`;

  // Event Listeners for Top Up
  document.getElementById('topup-button').addEventListener('cli>
    topupForm.classList.remove('hidden');
  });

  document.getElementById('confirm-topup').addEventListener('cl>
    const amount = parseInt(document.getElementById('topup-amou>
    if (amount > 0) {
      saldo += amount;
      saldoElement.textContent = `Rp ${saldo.toLocaleString()}`;
      alert(`Top Up sebesar Rp ${amount.toLocaleString()} berha>
    } else {
      alert('Masukkan jumlah yang valid!');
    }
    document.getElementById('topup-amount').value = '';
    topupForm.classList.add('hidden');
  });

  document.getElementById('cancel-topup').addEventListener('cli>
    document.getElementById('topup-amount').value = '';
    topupForm.classList.add('hidden');
  });
// Update Event Listener Top Up
document.getElementById('confirm-topup').addEventListener('c

// Update Event Listener Transfer
document.getElementById('confirm-transfer').addEventListener('click', () => {
  const address = document.getElementById('transfer-address').value.trim();
  const amount = parseInt(document.getElementById('transfer-amount').value, 10);

  if (address === '' || amount <= 0) {
    alert('Masukkan alamat wallet dan jumlah transfer yang valid!');
    return;
  }

  if (saldo >= amount) {
    saldo -= amount;
    saldoElement.textContent = `Rp ${saldo.toLocaleString()}`;
    alert(`Transfer sebesar Rp ${amount.toLocaleString()} ke alamat ${address} berhasil!`);
    simpanTransaksi('Transfer', amount); // Simpan transaksi
  } else {
    alert('Saldo Anda tidak cukup untuk melakukan transfer!');
  }

  document.getElementById('transfer-address').value = '';
  document.getElementById('transfer-amount').value = '';
);
