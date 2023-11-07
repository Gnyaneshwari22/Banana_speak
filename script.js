console.log("Heloworld");

let btn= document.getElementById("btn");

// btn.addEventListener("click",( )=>{
//         console.log("BUtton clicked");
//     let name =prompt("enter the Name");
//     alert("here is the " + name +  " my name" );
// })
var textInput=document.querySelector(".text-area");
var outputBox=document.querySelector(".div-two");
var serverUrl="https://api.funtranslations.com/translate/minion.json";

function getTranslation(input){
    var output=serverUrl + "?" + "text=" +input;
    console.log(output);
    return output;
}

function clickHandler(){
     var inputText= textInput.value;

     fetch(getTranslation(inputText))
     .then(response => response.json())
     .then(json => {
        var translateText=json.contents.translated;
        outputBox.innerText=translateText;
     }).catch((e) =>{
        console.log(e);
        alert("errorwhile fetching try after some time");
     })
}

btn.addEventListener("click",clickHandler);

// document.querySelectorAll('textarea');
// document.getElementsByTagName('textarea');
// document.querySelector(".btn-primary");
// document.querySelector("#id")







