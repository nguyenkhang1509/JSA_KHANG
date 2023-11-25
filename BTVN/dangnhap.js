let emailInput = document.querySelector("#email");
let passwordInput = document.querySelector("#pass");
let btnLogin = document.querySelector(".btnLogin");
let errorMessages = document.querySelectorAll(".errorMessage");
let errorMessageEmail = errorMessages[0];
let errorMessagePassword = errorMessages[1];


const account = {
  email: "khang123@gmail.com",
  pass: "123123",
};


btnLogin.addEventListener("click", function () {
  let emailValue = emailInput.value;
  let passValue = passwordInput.value;


  if (emailValue == account.email) {

    if (passValue == account.pass) {

      alert("Đăng nhập thành công");
      location.href = "index.html";
      localStorage.setItem("dangnhap", account.email);
    } else {

      alert("Sai mat khau");
    }
  } else {

    emailInput.classList.add("error");
    errorMessageEmail.innerText = "Tai dep trai da sai tai khoan";
  }
});
