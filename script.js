// Function untuk menampilkan jam sesuai waktu lokal
function updateClock() {
    const timeElement = document.getElementById('time');
    const now = new Date();
    
    // Format jam, menit, dan detik
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Format waktu untuk dua digit
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    const timeString = `${hours}:${minutes}:${seconds}`;

    // Tampilkan waktu pada elemen #time
    timeElement.textContent = timeString;
}

// Update jam setiap detik
setInterval(updateClock, 1000);

// Inisialisasi jam saat pertama kali halaman dimuat
updateClock();
