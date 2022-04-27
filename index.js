document.getElementById("button-login").addEventListener("click", () => {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  var myHeaders = new Headers();
  myHeaders.append("User-Agent", "apifox/1.0.0 (https://www.apifox.cn)");

  var formdata = new FormData();
  formdata.append("username", username);
  formdata.append("pwd", password);
  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: formdata,
    redirect: "follow",
  };

  fetch("http://127.0.0.1:4523/mock/887827/user/login", requestOptions)
    .then((res) => {
      if (res.status == 200) {
        window.location.href = "main.html";
      } else {
        alert("用户名或密码错误");
      }
    })
    .catch((error) => console.log("error", error));
});
