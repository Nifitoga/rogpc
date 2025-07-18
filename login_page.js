function loginUser(event) {
    event.preventDefault();
  
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    if (username === 'Nifitoga' && password === 'Nifrog67') {
      document.getElementById('message').style.color = 'white';
      document.getElementById('message').textContent = 'Успешный вход!';
      setTimeout(() => window.location.href = "index.html", 1000);
    } else {
      document.getElementById('message').style.color = 'white';
      document.getElementById('message').textContent = 'Неверное имя или пароль';
    }
  
    return false;
  }