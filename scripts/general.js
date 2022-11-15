function LoadValidations() {
  let val1 = document.querySelector("#validation-1");
  let val2 = document.querySelector("#validation-2");
  val1.setAttribute("href", "https://validator.w3.org/check?uri=" + location.href);
  val2.setAttribute("href", "https://jigsaw.w3.org/css-validator/validator?uri=" + location.href);
}

var tid = setInterval( function () {
  if ( document.readyState !== 'complete' ) return;
  clearInterval( tid );       
  LoadValidations();
}, 100 );