document.getElementById('access-form').addEventListener('submit', function (event) {
  event.preventDefault();
  const password = document.getElementById('password').value;
  const correctPassword = "akses123"; // Ubah sesuai dengan password Anda

  if (password === correctPassword) {
    window.location.href = "exclusive.html"; // Arahkan ke halaman eksklusif
  } else {
    document.getElementById('access-message').innerText = "Password salah. Coba lagi!";
  }
});
