window.onload = function() {
    $("#portfolioPage").hide();
    $("#aboutMePage").hide();
    $("#contactMePage").hide();
    $("#githubPage").hide();
    $("#linkedinPage").hide();
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
    });

    $("#linkedIn").click(function(){
        $("#linkedinPage").attr("target", "_blank")
    });

});