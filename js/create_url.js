
var clic_on = document.getElementById('input_clic');
var redirect_to = document.getElementById('input_redirect');

var url = document.getElementById('url_generated');

function makeid()
{
  /*
  From http://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
  */
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < 100; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

function generate_url(){
  if (clic_on.value == '' || redirect_to.value == ''){
    url.innerHTML = '<p class="alert alert-danger">Deben rellenarse ambos campos</p>';
  }
  else{
  url.innerHTML = document.domain + document.location.pathname + '?r=' + redirect_to.value + '&' + makeid() + '&c=' + clic_on.value + makeid();
  }
}
