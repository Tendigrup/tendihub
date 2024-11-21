// Simpan data pendaftaran ke Local Storage
document.getElementById("registerForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const nama = document.getElementById("nama").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Simpan data ke Local Storage
    localStorage.setItem("pengguna", JSON.stringify({ nama, email, password }));

    alert("Pendaftaran berhasil! Silakan login untuk melanjutkan.");
    window.location.href = "login.html"; // Arahkan ke halaman login
});
