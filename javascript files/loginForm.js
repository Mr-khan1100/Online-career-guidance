function loginFunction() {
  var login_input = document.getElementById("login-input");
  var show = document.getElementById("show");
  var hide = document.getElementById("hide");

  if (login_input.type === "password") {
    login_input.type = "text";
    show.style.display = "inline-block";
    show.style.cursor = "pointer";
    hide.style.display = "none";
  } else {
    login_input.type = "password";
    show.style.display = "none";
    hide.style.display = "inline-block";
    hide.style.cursor = "pointer";
  }
}

function login() {
  var lemail = document.getElementById("login-email").value;
  var lpassword = document.getElementById("login-input").value;

  let user_records = new Array();
  user_records = JSON.parse(localStorage.getItem("users"))
    ? JSON.parse(localStorage.getItem("users"))
    : [];

  if (
    user_records.some((v) => {
      return v.email1 == lemail && v.password1 == lpassword;
    })
  ) {
    localStorage.setItem("code", "secret");
    window.open("/html files/webproject.html");
  } else {
    alert("email or password incorrect");
  }
}
