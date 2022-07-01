$(document).ready(function () {
  $(".fa-bars").click(function () {
    $(this).toggleClass("fa-times");
    $(".navbar").toggleClass("nav-toggle");
  });

  $(window).on("load scroll", function () {
    $(".fa-bars").removeClass("fa-times");
    $(".navbar").removeClass("nav-toggle");

    if ($(window).scrollTop() > 30) {
      $(".header").css({
        background: "#6c5ce7",
        "box-shadow": "0 .2rem .5rem rgba(0,0,0,.4) ",
      });
    } else {
      $(".header").css({ background: "none", "box-shadow": "none " });
    }

    if ($(window).scrollTop() > 30) {
      $(".header .search-btn").css({
        background: "purple",
        "box-shadow": "0 .2rem .5rem rgba(0,0,0,.4) ",
      });
    } else {
      $(".header .search-btn").css({
        background: "#6c5ce7",
        "box-shadow": "none ",
      });
    }
  });

  $(".accordion-header").click(function () {
    $(".accordion .accordion-body").slideUp();
    $(this).next(".accordion-body").slideDown();
    $(".accordion .accordion-header span").text("+");
    $(this).children("span").text("-");
  });
});

var logoutBtn = document.getElementById("webLogout-btn");
var passCode = localStorage.getItem("code");
var signinBtn = document.getElementById("signup-btn");
var loginBtn = document.getElementById("webLogin-btn");
var greeting = document.getElementById("greeting");
function displayButton() {
  if (passCode == "secret") {
    logoutBtn.style.display = "block";
    loginBtn.style.display = "none";
    signinBtn.style.display = "none";
    greeting.style.display = "block";
  } else {
    window.location.href = "/html files/loginForm.html";
  }
}

function logout() {
  if (passCode == "secret") {
    localStorage.setItem("code", "logout");
  } else {
    window.location.href = "/html files/loginForm.html";
  }
}

function contact() {
  var fname = document.getElementById("firstName").value;
  var email = document.getElementById("contEmail").value;
  var message = document.getElementById("message").value;

  let user_records = new Array();
  user_records = JSON.parse(localStorage.getItem("messages"))
    ? JSON.parse(localStorage.getItem("messages"))
    : [];

  if (
    user_records.some((v) => {
      return v.email1 == email;
    })
  ) {
    user_records.push({
      fname1: fname,
      email1: email,
      message1: message,
    });
    localStorage.setItem("messages", JSON.stringify(user_records));
    alert("message recieved");
    fname = "";
    email = "";
    message = "";
  } else {
    user_records.push({
      fname1: fname,
      email1: email,
      message1: message,
    });
    localStorage.setItem("messages", JSON.stringify(user_records));
    alert("message recieved");
    fname = "";
    email = "";
    message = "";
  }
}
