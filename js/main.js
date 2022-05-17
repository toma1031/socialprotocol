// save cookie
function setcookie() {
  document.cookie = "added=true; max-age=3600";
}
  
// extract cookie
var cookies = document.cookie;
var cookiesArray = cookies.split(';');
console.log(cookies)
for(var c of cookiesArray){ 
    var cArray = c.split('=');
    if( cArray[0].trim() == 'added'){ 
        console.log(cArray); 
        document.getElementById('welcome').innerHTML='Thank you for signning up!';
        document.getElementById('tell_me_button').remove();
    }
}

// coinflip_efefct
document.getElementById('circle').addEventListener('click', function(){
  document.getElementById("circle").animate([
    // keyframes
    { transform: 'rotateX(0)' },
    { transform: 'rotateX(360deg)' }
  ], {
    // timing options
    duration: 1000,
  });
})