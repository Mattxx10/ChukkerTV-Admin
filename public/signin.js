function signInWithEmail(){
    var password = document.getElementById("password").value;
    var email = document.getElementById("email").value;
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(function(result) {
      console.log(result.user.email);
    }).catch(function(error) {
      // Handle error.
    });
}