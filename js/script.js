const daftarButton = document.querySelector('a[href="Login.html"]');

daftarButton.addEventListener('click', function(event) {
event.preventDefault();

const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passInput = document.getElementById('pass');

if (nameInput.value.trim() === '' || emailInput.value.trim() === '' || passInput.value.trim() === '') {
alert('Harap isi semua field dengan benar.');
return;
}

alert('Daftar Berhasil, Selamat Datang!');

window.location.href = 'Login.html';
});