var api = "http://api.giphy.com/v1/gifs/search?";
var apiKey = "&api_key=dc6zaTOxFJmzC";
var query = "";
var textfield;
var sum;

function setup() {
  noCanvas();
  textfield = createInput();
  textfield.input(newText);
  sum=createButton('submit');
  var url = api + apiKey + query;
  loadJSON(url, gotData);
}

function newText() {
   query= "&q="+textfield.value();
}

function gotData(giphy) {
  for (var i = 0; i < giphy.data.length; i++) {
    createImg(giphy.data[i].images.original.url);
  }

}