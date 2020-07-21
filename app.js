function openNav() {
  document.getElementById("mySidenav").style.width = "300px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
function formSubmit(event){
  console.log( document.getElementById("form").elements.length);
  event.preventDefault();
}

function show_value(x) {
 document.getElementsByClassName("slider_value")[x-1].innerHTML=document.getElementsByClassName("range")[x-1].value;
}

  var inputs=document.getElementsByClassName("range");
  var spans=document.getElementsByClassName("slider_value");
  for(var i=0;i<inputs.length;i++){
    spans[i].innerHTML=inputs[i].value;
  }


    openNav();
    closeNav();
 
