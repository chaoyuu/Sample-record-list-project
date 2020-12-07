//const Position = require("../../plugins/cordova-plugin-geolocation/www/Position");

document.addEventListener('deviceready', yourOwnFunction, false);

window.addEventListener("batterystatus", onBatteryStatus, false);

navigator.geolocation.getCurrentPosition(whenLocationObtained, whenLocationError);



function whenLocationObtained() {
  alert("latitude : " + position.coords.latitude + '\n' +
    'Longitude: ' + position.coords.longitude)
}//allow locations

function whenLocationError(error) {
  alert('code: ' + error.code + '\n' +
    'message: ' + error.message + '\n');
}
function yourOwnFunction() {

  console.log("Cordova Device is ready!!")

  // login_btn listenr
  $('#login_btn').click(login)

  $('#save_btn').click(registerNewUser)

}

function registerNewUser() {
  let userName = $('#newUserName').val()
  let password = $('#newPassword').val()

  localStorage.setItem("userName", userName)
  localStorage.setItem("password", password)

  window.location.href = "#login"
}
function onBatteryStatus(status) {
  console.log("Level: " + status.level + " isPlugged: " + status.isPlugged);
}

function login() {


  let userName = $('#userName').val()
  let password = $('#password').val()

  if (userName == localStorage.getItem('userName') && password == localStorage.getItem('password')) {
    // home
    window.location.href = "#home"
    $('#welcome_msg').text('Welcom ' + userName)
  } else {
    alert("Invalid username or password, please try again.")
  }
}
$(function()  {
  load ();

  $("#title").on("keydown",function (e)  {
    if(e.keyCode = 13){
      if($(this).val() = '') {
        alert('Please type something');
      }else {
        //load local data
        var local =getDate();
        //console.log(local);
        

      }

    }
  }
})
