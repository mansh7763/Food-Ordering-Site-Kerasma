"use strict";
// form validation
function registration() {
  var name = document.getElementsByName("num").values;
  var email = document.getElementsByName("email").values;
  var mobile = document.getElementsByName("mobile").values;
  var pwd = document.getElementsByName("pwd").values;
  var cpwd = document.getElementsByName("cpwd").values;

  var pwd_expression =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
  var letters = /^[A-Za-z]+$/;
  var filter =
    /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  var phone_expr = /^\+91\s\d{10}$/;
  if (name == "") {
    alert("please enter your name ");
  } else if (!letters.test(name)) {
    alert("Name field required only alphabet characters");
  } else if ((email = "")) {
    alert("please enter your email-id");
  } else if (!filter.test(email)) {
    alert("Please enter valid email");
  } else if ((mobile = "")) {
    alert("enter your mobile number");
  } else if (!phone_expr.test(mobile)) {
    alert("invalid phone number");
  } else if ((pwd = "")) {
    alert("Enter password");
  } else if ((cpwd = "")) {
    alert("Enter password");
  } else if (!pwd_expression.test(pwd)) {
    alert(
      "Upper case, Lower case, Special character and Numeric letter are required in Password filed"
    );
  } else if (pwd != cpwd) {
    alert("Password not matched");
  } else if (
    document.getElementsByName("pwd").values.length < 6 &&
    document.getElementsByName("pwd").values.length > 12
  ) {
    alert("password should be greater than 6 and less than 12");
  } else {
  }
}
