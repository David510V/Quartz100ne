$(document).ready(function () {

  $('.first-button').on('click', function () {

    $('.animated-icon1').toggleClass('open');
  });
  $('.second-button').on('click', function () {

    $('.animated-icon2').toggleClass('open');
  });
  $('.third-button').on('click', function () {

    $('.animated-icon3').toggleClass('open');
  });
});


  var cont=document.getElementById("cont");
  var h1=document.getElementById("head");
  var p=document.getElementById("po")
  
  if($(window).width()<=375 && $(window).height()<=640)
  {
    $(cont).addClass("galaxy")
    
    $(h1).removeClass("display-4")

    $(h1).addClass("displayG")
    
    $(p).addClass("gap")
  }
  
  
  
  
  