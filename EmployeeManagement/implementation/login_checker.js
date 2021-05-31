function isAuthorized() {
  return isLoggedin();
}

function isLoggedin(){
  var login_status = true; // assume 'login status = TRUE'
  return login_status;
}

module.exports = { isAuthorized };
