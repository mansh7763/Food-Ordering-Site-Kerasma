$(document).ready(function () {
  $("#signup").on("click", function () {
    var x = this.id;
    $("#" + x).removeClass("s-atbottom");
    $("#" + x).addClass("s-attop");
    $("#login").removeClass("l-attop");
    $("#login").addClass("l-atbottom");
  });

  $("#login").on("click", function () {
    var x = this.id;
    $("#" + x).removeClass("l-atbottom");
    $("#" + x).addClass("l-attop");
    $("#signup").removeClass("s-attop");
    $("#signup").addClass("s-atbottom");
  });
});

const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");

signUpButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

signInButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});

function validateRegistration() {
  var name = document.getElementsByName("username")[0].value;
  var email = document.getElementsByName("email")[0].value;
  var mobile = document.getElementsByName("mobile")[0].value;
  var pwd = document.getElementsByName("pwd")[0].value;
  var cpwd = document.getElementsByName("cpwd")[0].value;

  var pwdExpression =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
  var letters = /^[A-Za-z]+$/;
  var emailRegex =
    /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  var phoneRegex = /^\+91\s\d{10}$/;

  if (name === "") {
    alert("Please enter your name");
    return false;
  } else if (!letters.test(name)) {
    alert("Name field requires only alphabet characters");
    return false;
  } else if (email === "") {
    alert("Please enter your email-id");
    return false;
  } else if (!emailRegex.test(email)) {
    alert("Please enter a valid email");
    return false;
  } else if (mobile === "") {
    alert("Please enter your mobile number");
    return false;
  } else if (!phoneRegex.test(mobile)) {
    alert("Invalid phone number");
    return false;
  } else if (pwd === "") {
    alert("Please enter a password");
    return false;
  } else if (cpwd === "") {
    alert("Please confirm your password");
    return false;
  } else if (!pwdExpression.test(pwd)) {
    alert(
      "Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character"
    );
    return false;
  } else if (pwd !== cpwd) {
    alert("Passwords do not match");
    return false;
  } else if (pwd.length < 6 || pwd.length > 12) {
    alert("Password should be between 6 and 12 characters");
    return false;
  } else {
    window.location.href = "login.html";
  }
}

function validateLogin() {
  var email = document.getElementsByName("email")[0].value;
  var password = document.getElementsByName("psd")[0].value;

  var emailRegex =
    /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  if (email === "") {
    alert("Please enter your email");
    return false;
  } else if (!emailRegex.test(email)) {
    alert("Please enter a valid email");
    return false;
  } else if (password === "") {
    alert("Please enter your password");
    return false;
  } else {
    window.location.href = "menus.html";
  }
}
