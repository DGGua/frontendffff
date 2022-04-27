document.getElementById("button-change").addEventListener("click", () => {
  let name = document.getElementById("name").value;
  let pas1 = document.getElementById("pwd-new").value;
  let pas2 = document.getElementById("pwd-check").value;
  console.log(pas1, pas2);
  if (pas1 != pas2) {
    alert("两次密码不一致");
    return;
  }
  fetch(`${prefix}/user/update_user`, {
    method: "PUT",
    data: {
      name,
      pwd: pas1,
    },
  }).then((res) => {
    if (res.status == 200) {
      alert("修改成功");
      window.location.href = "index.html";
    } else {
      alert("Error");
    }
  });
});
