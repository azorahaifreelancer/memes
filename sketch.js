var api = "http://api.giphy.com/v1/gifs/search?";
var apiKey = "&api_key=dc6zaTOxFJmzC";
var query = "&q=obama";


function setup() {
  noCanvas();
  var url = api + apiKey + query;
  loadJSON(url, gotData);
}

function gotData(giphy) {
  for (var i = 0; i < giphy.data.length; i++) {
    createImg(giphy.data[i].images.original.url);
  }

}


1. ir buscar a cklasse da textarea dar um evento (tipo moussed pressded )

2. dentro dessa função vais buscar o value da classe textearea

3 vai acontecer dentro de uma variavel , ver consolelog.

/*

var textfield;
var output;
var submit;

function setup() {
  noCanvas();
  // textfield = createInput("your favorite food");
  textfield = select("#blueberry");
  //textfield.changed(newText);
  textfield.input(newTyping);
  output = select('#output');
  submit = select("#submit");
  submit.mousePressed(newText);

}

function newTyping() {
  output.html(textfield.value());
  //createP(textfield.value());
}


function newText() {
  createP(textfield.value());
}
*/