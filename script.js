// Contoh script sederhana untuk animasi pada tombol
document.querySelector('.btn').addEventListener('mouseover', function() {
    this.style.backgroundColor = '#e65c00';
});

document.querySelector('.btn').addEventListener('mouseout', function() {
    this.style.backgroundColor = '#ff6600';
});
