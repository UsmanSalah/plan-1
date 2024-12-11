

document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Отключает стандартную отправку формы
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const rememberMe = document.getElementById("rememberMe").checked;
  
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Remember Me:", rememberMe);
  
    // Здесь можно добавить функционал для отправки данных на сервер
    alert("Login successful!");
  });
  