$(document).ready(function() {
    $("#menu-button").click(function() {
      $("nav").addClass("open");
      $("body").addClass("overlay");
    });
  
    $("#close-button").click(function() {
      $("nav").removeClass("open");
      $("body").removeClass("overlay");
    });
  
    $(window).resize(function() {
      if ($(window).width() > 768) {
        $("nav").removeClass("open");
        $("body").removeClass("overlay");
      }
    });
  });
