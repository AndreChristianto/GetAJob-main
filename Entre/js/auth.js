const register = (email, fullName, password) => {
    var isSeller = 0;
    const user = {
      email,
      fullName,
      password,
      isSeller
    };
  
    let users = JSON.parse(localStorage.getItem("users"));
    if (!users) {
      localStorage.setItem("users", JSON.stringify([user]));
      return;
    }
  
    users = [...users, user];
    localStorage.setItem("users", JSON.stringify(users));
  };
  
const login = (email, password) => {
    console.log("login");
    const users = JSON.parse(localStorage.getItem("users"));

    if (!users) {
        alert("invalid email & password");
        return;
    }

    const user = users.find(
      (user) => user.email === email && user.password === password
    );
  
  
    if (!user) {
      alert("invalid email & password");
      return;
    }
  
    localStorage.setItem("auth", JSON.stringify(user));
    window.location.href = "home.html";
};
  
const logout = () => {
    localStorage.removeItem("auth");
    window.location.href = "home.html";
};

const updateIsSeller = () =>{
    const currentUser = JSON.parse(localStorage.getItem("auth"));
    var allUsers = JSON.parse(localStorage.getItem("users"));

    var userList = new Array;

    for(var i = 0; i < allUsers.length; i++){
        if(allUsers[i].email == currentUser.email){
            var email = currentUser.email;
            var fullName = currentUser.fullName;
            var password = currentUser.password;
            var isSeller = 1;

            userList.push({
                email,
                fullName,
                password,
                isSeller
              });

        } else {
            var email = allUsers[i].email;
            var fullName = allUsers[i].fullName;
            var password = allUsers[i].password;
            var isSeller = allUsers[i].isSeller;
            
              userList.push({
                email,
                fullName,
                password,
                isSeller
              });   
        }
    }
    console.log(userList);
    localStorage.setItem("users", JSON.stringify(userList));

    localStorage.removeItem("auth");
    login(currentUser.email, currentUser.password);
}


function validateRegister(email, fullName, password, confirmPassword){
    var numbers = /[0-9]/g ;
    var uppercase = /[A-Z]/g;
    var emailValid = /@/g;
    // validasi email
    if(email == ""){
        $("#email-error-msg").text("Please Enter Your Email!")
        $("#email-error-msg").show()
        return false
    } else if(!email.match(emailValid)){
        $("#email-error-msg").text("Please Enter a Valid Email!")
        $("#email-error-msg").show()
        return false
    } else {
        $("#email-error-msg").hide()
    }

    //validasi full name
    if(fullName == ""){
        $("#full-name-error-msg").text("Please Enter Your Full Name!")
        $("#full-name-error-msg").show()
        return false
    } else {
        $("#full-name-error-msg").hide()
        validation = true
    }

    // validasi password
    if(password == ""){
        $("#password-error-msg").text("Please Fill Your Password!")
        $("#password-error-msg").show()
        return false
    } else if(password.length < 8){
        $("#password-error-msg").text("Password must be more than 8 characters!")
        $("#password-error-msg").show() 
        return false
    } else if(!password.match(numbers)){
        $("#password-error-msg").text("Password must contain a number!")
        $("#password-error-msg").show() 
        return false
    } else if(!password.match(uppercase)){
        $("#password-error-msg").text("Password must contain an uppercase letter!")
        $("#password-error-msg").show() 
        return false
    } else {
        $("#password-error-msg").hide()
    }

    if(password != confirmPassword){
        $("#confirm-password-error-msg").text("Password does not match! Please Re-confirm your password")
        $("#confirm-password-error-msg").show()
        return false
    } else {
        $("#confirm-password-error-msg").hide()
    }

    return true
}

$(document).ready(function(){
    if(JSON.parse(localStorage.getItem("auth"))){
        $(".logged-out-features").hide()
        $(".logged-in-features").show()
        const currentUser = JSON.parse(localStorage.getItem("auth"));
        var position = currentUser.fullName.search(" ");
        if(position == -1){
            $(".profile-name").text(currentUser.fullName)
        } else {
            $(".profile-name").text(currentUser.fullName.substr(0, currentUser.fullName.indexOf(' ')))
        }
        $(".full-name-text").text(currentUser.fullName)
    } else {
        $(".logged-out-features").show()
        $(".logged-in-features").hide()
    }

    

});
  