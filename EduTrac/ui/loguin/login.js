document.getElementById('login-form').addEventListener('submit', function (event) {
  event.preventDefault(); 

  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();

  if (email && password) {
    window.location.href = '/ui/dashboard/dashboard.html'; 
  } else {
    alert('Por favor ingrese su correo y contraseña.');
  }
});
