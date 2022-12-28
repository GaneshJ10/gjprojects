//form 1

function fun(){
    var uname=document.forms["myform"]["uname"].value;
    var upas=document.forms["myform"]["upas"].value;

if(uname==null || uname=="" ){
          document.getElementById("errorBox").innerHTML =
           "enter the user name";
         return false;
}

if(upas==null || upas==""){
          document.getElementById("errorBox").innerHTML =
           "enter the password";
         return false;
}

//window.location.href = "info.html";

if (uname != '' && upas != '' ){
 alert("Login successfully");
window.open("info.html"); 

  //location.href ="file:///C:/Users/welcome/Documents/project/info.html";

// <a href="info.html"target="-blank" >

//</a>
}     

}

//form 2

function fun1(){
    var uname1=document.forms["form2"]["uname1"].value;
    var ueml=document.forms["form2"]["ueml"].value;
    var upas1=document.forms["form2"]["upas1"].value;
    var upas2=document.forms["form2"]["upas2"].value;


if(uname1==null || uname1=="" ){
          document.getElementById("errorBox").innerHTML =
           "enter the user name";
         return false;
}

if(ueml==null || ueml==""){
          document.getElementById("errorBox").innerHTML =
           "enter the email";
         return false;
}

if(upas1==null || upas1=="" ){
          document.getElementById("errorBox").innerHTML =
           "enter the password";
         return false;
}

if( upas2==null ||  upas2==""){
          document.getElementById("errorBox").innerHTML =
           "enter the password";
         return false;}

if( upas1 !=  upas2){
          document.getElementById("errorBox").innerHTML =
           "password dont match";
         return false;}



if (uname1 != '' && upas1 != '' && upas2 != '' && ueml != '' && upas1 == upas2)


  alert("Register successfull");
window.open("signin.html"); 

                 

}