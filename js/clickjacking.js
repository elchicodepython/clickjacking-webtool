
console.log('Simple 2 steps redirector -> DEVELOPED BY Samuel López');


var clic = /c=(http[s]?:\/\/[A-Za-z0-9\-\/\.]+)/gi
var redirector = /r=(http[s]?:\/\/[A-Za-z0-9\-\/\.]+)/gi

function make_click(){
  var clic_url = clic.exec(window.location.href);
  if (clic_url != null){
    var image = new Image(100, 100);
    image.src = clic_url[1];
  }
}

function redirect_to(){

  var redirect = redirector.exec(window.location.href);
  if (redirect != null){
      window.location.href = redirect[1];
  }

}

make_click();
redirect_to();
