function zaloguj(){
 
    var login = document.getElementById("login").value;
    var haslo = document.getElementById("haslo").value;
    
    if(login == "login" && haslo == "h4sło"){
        document.getElementById("postLog").style.visibility = "visible";
        document.getElementById("preLog").style.visibility = "hidden";
    }else{
        if(login != "login"){alert("zły login!")}
        else if(haslo != "h4sło"){alert("złe hasło!")}
        else{alert("jakiś błąd!")};
    }
}