$(document).ready(function() {
  $("#link-manager").click(function(e){
    //e.preventDefault();
    var content  = $('#site-canvas');
    content.addClass('first');
    /*setTimeout(function(){
      window.location.href = "homepage-manager.html";}, 1000);*/
  });
});

$(document).ready(function() {
  $("#link-child").click(function(e){
    var content  = $('#site-canvas');
    content.addClass('second');
  });
});