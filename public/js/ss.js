$(document).ready(function () {


    $('.second-button').on('click', function () {
  
      $('.animated-icon2').toggleClass('open');
    });
   
  });

  var togg= document.querySelector(".navbar-toggler");
  var collapse=document.querySelector(".navbar-collapse");

  togg.addEventListener("click",function()
  {
     collapse.classList.add(".expend");
  })

  
