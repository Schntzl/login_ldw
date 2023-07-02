document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    // Aqui você pode adicionar a lógica de autenticação
    if (username === "Usuário" && password === "senha123") {
      alert("Login bem-sucedido!");
    } else {
      alert("Credenciais inválidas. Tente novamente.");
    }
  });
  