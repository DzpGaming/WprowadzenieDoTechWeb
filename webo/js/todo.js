var myNodeList = document.getElementsByTagName("LI");
var i;
for(i = 0; i<myNodeList.length; i++){
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodeList[i].appendChild(span);
}

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++){
    close[i].onclick = function(){
        var div = this.parentElement;
        div.style.display = "none";
    }
}

function newElement(){
    var li = document.createElement("li");
    var inputValue = document.getElementById("inputTODO").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    
    if(inputValue === ''){
        alert("Musisz coś napisać!");
    }else{
        document.getElementById("listUL").appendChild(li);
    }
    document.getElementById("inputTODO").value = "";
    
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("X");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
    
    for(i = 0; i < close.length; i++){
        close[i].onclick = function(){
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}

