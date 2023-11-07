console.log("Heloworld");

let btn= document.getElementById("btn");

// btn.addEventListener("click",( )=>{
//         console.log("BUtton clicked");
//     let name =prompt("enter the Name");
//     alert("here is the " + name +  " my name" );
// })
var textInput=document.querySelector(".text-area");
var inputBox=document.querySelector(".div-two");

function clickHandler(){
     inputBox.innerText=  textInput.value+ " This is translated value " ;
}

btn.addEventListener("click",clickHandler);

// document.querySelectorAll('textarea');
// document.getElementsByTagName('textarea');
// document.querySelector(".btn-primary");
// document.querySelector("#id")



btn.addEventListener("click",divHandler);

