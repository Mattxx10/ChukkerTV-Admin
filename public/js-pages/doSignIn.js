function doSignIn(){
    document.getElementById("main").innerHTML = 
    "<div class='admin-signin'>" 
    + "<h2>ADMIN PANEL</h2>"
    + "<img class='logo' src='srcs/images/newCTVLogo.svg' alt='ctv-logo'>"
    + "<input id='email' type='text' placeholder='Enter email' name='email' required>"
    + "<input id='password' type='password' placeholder='Enter password' name='password' required>"
    + "<button id='login' class='signin' type='submit'>Log In</button>"
    + "</div>"
}