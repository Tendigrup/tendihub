document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Ambil data dari Local Storage
    const pengguna = JSON.parse(localStorage.getItem("pengguna"));

    // Validasi
    if (pengguna && pengguna.email === email && pengguna.password === password) {
        alert("Login berhasil! Selamat datang, " + pengguna.nama);
        window.location.href = "saldo-digital.html"; // Arahkan ke halaman saldo digital
    } else {
        alert("Email atau kata sandi salah!");
    }
});
