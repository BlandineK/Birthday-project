function myResult() {
var day=document.getElementById("blandine1").Value;
var month=document.getElementById("blandine2").value;
var year=document.getElementById("blandine3").value;
var gender=document.getElementById("boy,girl").value;
var cc=(year-1)/100+1;
var submit=( ( (cc/4) -2*CC-1) + ((5*year/4) ) + ((26*(month+1)/10)) + day )%7 ;
var Submit=Math.floor(submit);

var get=["kwasi was born on sunday","kwadwo was born on monday","kwabena was born on tuesday","kwaku was born on wednesday","yaw was born on thursday","kofi was born on friday","kwame was born on saturday"]
if(day>0 && day<=31 && month>0 && month <12 && year>0){
if ( Submit==0 && gender=="male" ){

    document.getElementById("add").innerHTML=get[0];
}
else if (Submit==1 && gender=="male"){

    document.getElementById("add").innerHTML=get[1];
}
else if ( Submit==3 && gender=="male"){

    document.getElementById("add").innerHTML=get[3];
}
else if ( Submit==4 && gender=="male"){

    document.getElementById("add").innerHTML=get[4];
}
else if ( Submit==5 && gender=="male"){

    document.getElementById("add").innerHTML=get[5];
}
else if ( Submit==6 && gender=="male"){

    document.getElementById("add").innerHTML=get[6];
}


var get=["akosua was born on sunday","adwoa was born on monday","abenaa was born on tuesday","akua was born on wednesday","yaa was born on thursday","afua was born on friday","ama was born on saturday"]
if(day>0 && day<=31 && month>0 && month <12 && year>0){
    if ( Submit==0 && gender=="female" ){
    
        document.getElementById("add").innerHTML=get[0];
    }
    else if (Submit==1 && gender=="female"){
    
        document.getElementById("add").innerHTML=get[1];
    }
    else if ( Submit==3 && gender=="female"){
    
        document.getElementById("add").innerHTML=get[3];
    }
    else if ( Submit==4 && gender=="female"){
    
        document.getElementById("add").innerHTML=get[4];
    }
    else if ( Submit==5 && gender=="female"){
    
        document.getElementById("add").innerHTML=get[5];
    }
    else if ( Submit==6 && gender=="female"){
    
        document.getElementById("add").innerHTML=get[6]
    }
}
}
}
