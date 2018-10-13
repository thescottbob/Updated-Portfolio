window.onload = function() {
    $("#portfolioPage").hide();
    $("#aboutMePage").hide();
    $("#contactMePage").hide();
  };

$(document).ready(function(){

    //On click events if any of the buttons are clicked
    $("#portfolio").click(function(){
        $("#homePage").fadeOut("slow");
        $("#portfolioPage").fadeIn("slow");
    });

    $("#aboutMe").click(function(){
        $("#homePage").fadeOut("slow");
        $("#aboutMePage").fadeIn("slow");
    });

    $("#contactMe").click(function(){
        $("#homePage").fadeOut("slow");
        $("#contactMePage").fadeIn("slow");
    });

    $("#github").click(function(){
        $("#githubLink").attr("target", "_blank");
        window.open("https://github.com/thescottbob");
    });

    $("#linkedIn").click(function(){
        $("#linkedinLink").attr("target", "_blank");
        window.open("https://www.linkedin.com/in/scottmcmains/");
    });

});