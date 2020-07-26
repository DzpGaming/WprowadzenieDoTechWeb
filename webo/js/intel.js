function zamien(){
    var skad = document.getElementById("skad").value;
    var gdzie = document.getElementById("gdzie").value;
    var wart1 = "";
    
    switch(skad){
        case 'AX':
            wart1 = document.getElementById("AX").innerText;
            break;
        case 'BX':
            wart1 = document.getElementById("BX").innerText;
            break;
        case 'CX':
            wart1 = document.getElementById("CX").innerText;
            break;
        case 'DX':
            wart1 = document.getElementById("DX").innerText;
            break;
    }
    switch(gdzie){
        case 'AX':
            document.getElementById("AX").innerHTML = wart1;
            break;
        case 'BX':
            document.getElementById("BX").innerHTML = wart1;
            break;
        case 'CX':
            document.getElementById("CX").innerHTML = wart1;
            break;
        case 'DX':
            document.getElementById("DX").innerHTML = wart1;
            break;
    }
}

function wprowadz(){
    var dokad = document.getElementById("dokad").value;
    var tekst = document.getElementById("tekst").value;
    switch(dokad){
        case 'AX':
            document.getElementById("AX").innerHTML = tekst;
            break;
        case 'BX':
            document.getElementById("BX").innerHTML = tekst;
            break;
        case 'CX':
            document.getElementById("CX").innerHTML = tekst;
            break;
        case 'DX':
            document.getElementById("DX").innerHTML = tekst;
            break;
    }
    document.getElementById("tekst").value = "";
}