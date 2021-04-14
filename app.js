var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/pig-latin.json"

function getTranslationURL(text){

    return serverURL + "?text=" + text;
}

function errorHandler(error){
    console.log("error occured", error)
    alert("Something wrong with the server, try again after sometime.")
}

function clickHandler() {
    
  //outputDiv.innerText = "igpay" + txtInput.value;

  var text = txtInput.value;
  fetch(getTranslationURL(text))
  .then(response => response.json())
  .then(json => {
      outputDiv.innerText = json.contents.translated
      console.log(json.contents.translated)
  })

  .catch(errorHandler)
};

btnTranslate.addEventListener("click", clickHandler)
