function myFunction() {
  var x = document.getElementById("myInput");
  var y = document.getElementById("hide1");
  var z = document.getElementById("hide2");

  if (x.type === "password") {
    x.type = "text";
    y.style.display = "inline-block";
    y.style.cursor = "pointer";
    z.style.display = "none";
  } else {
    x.type = "password";
    y.style.display = "none";
    z.style.display = "inline-block";
    z.style.cursor = "pointer";
  }
}
function newFunction() {
  var x = document.getElementById("cInput");
  var y = document.getElementById("hide3");
  var z = document.getElementById("hide4");

  if (x.type === "password") {
    x.type = "text";
    y.style.display = "inline-block";
    y.style.cursor = "pointer";
    z.style.display = "none";
  } else {
    x.type = "password";
    y.style.display = "none";
    z.style.display = "inline-block";
    z.style.cursor = "pointer";
  }
}

function confirm() {
  let a = document.getElementById("myInput").value;

  if (a == "") {
    alert("enter password");
    return false;
  }
  let b = document.getElementById("cInput").value;
  if (b == "") {
    alert("confirm password");
    return false;
  }

  if (a != b) {
    alert("unmatched password");
    return false;
  }

  if (a == b) {
    window.location.href = "/html files/loginForm.html";
    return false;
  }
}

function signup() {
  var fname = document.getElementById("fname").value;
  var lname = document.getElementById("lname").value;
  var number = document.getElementById("number").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("cInput").value;

  let user_records = new Array();
  user_records = JSON.parse(localStorage.getItem("users"))
    ? JSON.parse(localStorage.getItem("users"))
    : [];

  if (
    user_records.some((v) => {
      return v.email1 == email;
    })
  ) {
    alert("user already exist");
  } else {
    user_records.push({
      fname1: fname,
      lname1: lname,
      number1: number,
      email1: email,
      password1: password,
    });
    localStorage.setItem("users", JSON.stringify(user_records));
  }
}
