const loginText = document.querySelector(".title-text .login");
const loginForm = document.querySelector("form.login");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector("form .signup-link a");
const formsing = document.querySelector("form.signup");

// document.getElementById("mybtn").disabled = true;
function checkbox() {
    var e = document.getElementById("check");
    if (e.checked) {
        document.getElementById("mybtn").disabled = false;
        document.getElementById("mybtn").style.background = "#f48b29";
    } else {
        document.getElementById("mybtn").style.background = "#6e7c7c";
        document.getElementById("mybtn").disabled = true;
    }
}

//formsing.style.marginLeft = "-200%";
signupBtn.onclick = (() => {
    loginForm.style.marginLeft = "-50%";
    loginText.style.marginLeft = "-50%";
    loginForm.style.visibility = "hidden";
    formsing.style.visibility = "visible";
    signupBtn.style.background="#fff";
    loginBtn.style.background="#999";
    document.getElementById("eye1").style.display="inline";
    document.getElementById("eye2").style.display="inline";

});
loginBtn.onclick = (() => {
    loginForm.style.marginLeft = "0%";
    loginText.style.marginLeft = "0%";
    loginBtn.style.background="#fff";
    loginForm.style.visibility = "visible";
    formsing.style.visibility = "hidden";
   
    signupBtn.style.background="#999";
});
signupLink.onclick = (() => {
    signupBtn.click();
    return false;
});
var statu = false;

function gorunum() {
    if (statu) {
        document.getElementById("sifre").setAttribute("type", "password");
        statu = false;
        document.getElementById("eye").style.color = "#000";
    } else {
        document.getElementById("sifre").setAttribute("type", "text");
        document.getElementById("eye").style.color = "#025955";
        statu = true;
    }
}
var statu1 = false;

function gorunum1() {
    if (statu1) {
        document.getElementById("sifre1").setAttribute("type", "password");
        statu1 = false;
        document.getElementById("eye1").style.color = "#000";
    } else {
        document.getElementById("sifre1").setAttribute("type", "text");
        document.getElementById("eye1").style.color = "#025955";
        statu1 = true;
    }
}

var statu2 = false;

function gorunum2() {
    if (statu2) {
        document.getElementById("sifre2").setAttribute("type", "password");
        statu2 = false;
        document.getElementById("eye2").style.color = "#000";
    } else {
        document.getElementById("sifre2").setAttribute("type", "text");
        document.getElementById("eye2").style.color = "#025955";
        statu2 = true;
    }
}

function kayitbutton() {
    var sifre1 =
        document.getElementById("sifre1").value;
    var sifre2 =
        document.getElementById("sifre2").value;

    if (sifre1 != sifre2) {
        alert("Şifreler uyuşmamaktadır.");
    }
}