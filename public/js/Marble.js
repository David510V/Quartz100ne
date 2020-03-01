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


var logo=document.getElementById("logo");
var link=document.getElementById("links");
var h1=document.getElementById("high1");


if($(window).width()<=360 && $(window).height()==640)
{
  $(logo).removeClass("screen")
  $(logo).addClass("galaxy")
  $(h1).removeClass("imgscreen")
  $(h1).addClass("imgalaxy")
}


if($(window).width()==1024 && $(window).height()==768)
{
  $(logo).removeClass("screen")
  $(logo).addClass("ipad")
  $(h1).removeClass("imgscreen")
  $(h1).addClass("imgalaxy")
}


if($(window).width()==320 && $(window).height()==568)
{
  $(logo).removeClass("screen")
  $(logo).addClass("iphone5")
  $(h1).removeClass("imgscreen")
  $(h1).addClass("imgalaxy")
}



if($(window).width()==1366 && $(window).height()==1024)
{
  $(logo).removeClass("screen")
  $(logo).addClass("ipadPRO")
  $(h1).removeClass("imgscreen")
  $(h1).addClass("imgalaxy")
}

if($(window).width()==1024 && $(window).height()==1366)
{
  $(logo).removeClass("screen")
  $(logo).addClass("ipadPRO")
  $(h1).removeClass("imgscreen")
  $(h1).addClass("imgalaxy")
}


if($(window).width()<=768 && $(window).height()<=1024)
{
  $(logo).removeClass("screen")
  $(logo).addClass("ipad")
  $(h1).removeClass("imgscreen")
  $(h1).addClass("imgalaxy")

}
