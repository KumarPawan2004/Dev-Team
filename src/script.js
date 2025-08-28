function handlelogin(event){
    event.preventDefault();

    let email = document.getElementById("loginEmail").value;
    let paasword = document.getElementById("loginPassword").value;

    console.log("Login Details");
    console.log("Email:-",email);
    console.log("Password:-",paasword);

}
function handlesignup(event){
    event.preventDefault();

    let email = document.getElementById("signupEmail").value;
    let paasword = document.getElementById("signupPassword").value;
    let Cpaasword = document.getElementById("cPassword").value;


    console.log("Signup Details");
    console.log("Email:-",email);
    console.log("Password:-",paasword);
    console.log("Confirm Password:-",Cpaasword);
}