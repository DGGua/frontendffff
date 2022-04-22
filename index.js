document.getElementById("button-login").addEventListener("click", () => {
  const username = document.getElementById("username").textContent;
  const password = document.getElementById("password").textContent;
  let data = new URLSearchParams();
  data.append("username", username);
  data.append("pwd", password);
  fetch(`${prefix}/user/login`, {
    method: "POST",
    data: data,
  }).then((res) => {
    if (res.data == "success") {
      window.location.href = "main.html";
    } else {
      alert("用户名或密码错误");
    }
    
  });
});
