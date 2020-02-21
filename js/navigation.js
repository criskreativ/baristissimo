$(function(){
  $('.burger').click(function(e){
    e.preventDefault();
    $('nav').toggleClass('navigation--active');
    $('.burger').toggleClass('burger--active');
  });
});
