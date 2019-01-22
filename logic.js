window.onload = function() {
  $(".page").hide();
  $("#homeButton").hide();
  $("#homePage").show();
};

$(document).ready(function() {
  //On click events if any of the buttons on Home page are clicked
  $("#portfolio").click(function() {
    $("#homePage").fadeOut("slow");
    $("#portfolioPage").fadeIn("slow");
  });

  $("#aboutMe").click(function() {
    $("#homePage").fadeOut("slow");
    $("#aboutMePage").fadeIn("slow");
  });

  $("#contactMe").click(function() {
    $("#homePage").fadeOut("slow");
    $("#contactMePage").fadeIn("slow");
  });

  $("#github").click(function() {
    $("#githubLink").attr("target", "_blank");
    window.open("https://github.com/thescottbob");
  });

  $("#linkedIn").click(function() {
    $("#linkedinLink").attr("target", "_blank");
    window.open("https://www.linkedin.com/in/scottmcmains/");
  });

// If the 'Home' button is clicked from any page
  $(".homeButton").click(function() {
    $(".page").fadeOut("slow");
    $("#homePage").fadeIn("slow");
  });

  // When any of the images on the Portfolio page are clicked on
  $("#foodeaze").click(function() {
    window
      .open("https://github.com/thescottbob/FoodEaze")
      .attr("target", "_blank");
  });

  $("#enviral").click(function() {
    window
      .open("https://github.com/kyleconyers/Enviral")
      .attr("target", "_blank");
  });

  $("#bamazon").click(function() {
    window
      .open("https://github.com/thescottbob/Bamazon")
      .attr("target", "_blank");
  });
});

// Initiate the carousel
$('.carousel').carousel();
