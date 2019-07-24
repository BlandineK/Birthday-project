function myResult() {
var day=parseInt(document.getElementById("blandine1").value);
var month=parseInt(document.getElementById("blandine2").value);
var year=parseInt(document.getElementById("blandine3").value);
var gender=document.querySelector("input[name='gender']:checked").value;

console.log(gender);
var cc=(year-1)/100+1;
var submit=( ( (cc/4) -2*cc-1) + ((5*year/4) ) + ((26*(month+1)/10)) + day )%7 ;
var submit=Math.floor(submit);
console.log(submit);

var get=["Kwasi : Sunday","Kwadwo : Monday","Kwabena : Tuesday","Kwaku : Wednesday","Yaw : Thursday","Kofi : Friday","kwame : Saturday"]
if(day>0 && day<=31 && month>0 && month <12 && year>0){
if ( submit==0 && gender=="Male" ){

    document.getElementById("add").innerHTML=("The Akan name is  " + get[0]);
}
else if (submit==1 && gender=="Male"){

    document.getElementById("add").innerHTML=("The Akan name is " + get[1]);
}
else if ( submit==2 && gender=="Male"){

    document.getElementById("add").innerHTML=("The Akan name is " + get[2]);
}
else if ( submit==3 && gender=="Male"){

    document.getElementById("add").innerHTML=("The Akan name is " + get[3]);
}
else if ( submit==4 && gender=="Male"){

    document.getElementById("add").innerHTML=("The Akan name is " + get[4]);
}
else if ( submit==5 && gender=="Male"){

    document.getElementById("add").innerHTML=("The Akan name is " + get[5]);
}
else if ( submit==6 && gender=="Male"){

    document.getElementById("add").innerHTML=("The Akan name is " + get[6]);
}
var get=["Akosua : Sunday","Adwoa : Monday","Abenaa: Tuesday","Akua : Wednesday","Yaa : Thursday","Afua : Friday","Ama : Saturday"]
    if ( submit==0 && gender=="Female" ){
    
        document.getElementById("add").innerHTML=("The Akan name is " + get[0]);
    }
    else if ( submit==1 && gender=="Female"){

        document.getElementById("add").innerHTML=("The Akan name is " + get[1]);
    }
    else if (submit==2 && gender=="Female"){
    
        document.getElementById("add").innerHTML=("The Akan name is " + get[2]);
    }
    else if ( submit==3 && gender=="Female"){
    
        document.getElementById("add").innerHTML=("The Akan name is " + get[3]);
    }
    else if ( submit==4 && gender=="Female"){
    
        document.getElementById("add").innerHTML=("The Akan name is " + get[4]);
    }
    else if ( submit==5 && gender=="Female"){
    
        document.getElementById("add").innerHTML=("The Akan name is " + get[5]);
    }
    else if ( submit==6 && gender=="Female"){
    
        document.getElementById("add").innerHTML=("The Akan name is " + get[6]);
    }
    else{
        alert("Good!!");
    }
    }
    else{
        alert("invalid date");

}
}

