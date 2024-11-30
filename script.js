// Password yang valid
const validPassword = "akses123"; // Ganti dengan password yang Anda tentukan
const form = document.getElementById('access-form');
const passwordInput = document.getElementById('password');
const errorMessage = document.getElementById('error-message');

form.addEventListener('submit', function (event) {
  event.preventDefault(); // Mencegah form melakukan submit default
  const enteredPassword = passwordInput.value;

  // Validasi password
  if (enteredPassword === validPassword) {
    window.location.href = "exclusive.html"; // Arahkan ke halaman eksklusif
  } else {
    errorMessage.style.display = "block"; // Tampilkan pesan kesalahan
  }
});


