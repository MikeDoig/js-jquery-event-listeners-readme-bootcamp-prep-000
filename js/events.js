function getIt() {
  $('p').on('click', function (){
    alert('Hey!');
  });
}
function frameIt() {
  $('img').on('load', function() {
    $('img').addClass('tasty');
  });
}
function submitIt() {
  
}
function pressIt() {
 $('#typing').on('keydown', function (e){
   if (e.key == 'g') {
   alert("You pressed 'g'!");
}
});
}

$(document).ready(function(){

// call functions here

});
