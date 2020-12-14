var changeButton = document.querySelector("#change-button");
var inputBox = document.querySelector("#input-box");
var outputBox = document.querySelector("#output-box");

var serverURL = "https://api.funtranslations.com/translate/morse.json" 

function getTranslationURL(text) {
    return serverURL + "?" + "text=" + text 
}

function errorHandler(error) {
    console.log("error occured", error);
    alert("smoething went wrong with server! please...try again after some time ")
}

function clickHandler(){
    var inputText = inputBox.value;   // taking input by inputBox
    

    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            var transLatedText = json.contents.translated;
            outputBox.innerText = transLatedText;
        })
        .catch(errorHandler)
}


changeButton.addEventListener("click", clickHandler)