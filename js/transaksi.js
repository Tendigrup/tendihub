document.addEventListener('DOMContentLoaded', () => {
  const transaksiList = document.getElementById('transaksi-list>

  // Ambil data transaksi dari localStorage
  const transaksiData = JSON.parse(localStorage.getItem('transa>

  if (transaksiData.length === 0) {
    const noData = document.createElement('li');
    noData.textContent = 'Belum ada transaksi.';
    transaksiList.appendChild(noData);
  } else {
    transaksiData.forEach((transaksi) => {
      const listItem = document.createElement('li');
      listItem.innerHTML = `
        <span><strong>${transaksi.jenis}</strong>: Rp ${transak>
        <br><small>${transaksi.waktu}</small>
      `;
      transaksiList.appendChild(listItem);
    });
  }
});
