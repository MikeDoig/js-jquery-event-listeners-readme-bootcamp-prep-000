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
 $('input').on('keydown', function (e){
   if (e.key == g) {
  alert('Hey!');
}
});
}

$(document).ready(function(){

// call functions here

});
