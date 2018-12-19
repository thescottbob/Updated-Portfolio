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

    $("#aboutMeHomeButton").click(function(){
        $("#aboutMePage").fadeOut("slow");
        $("#portfolioPage").fadeOut("slow");
        $("#homePage").fadeIn("slow");
    })

    // When any of the images on the Portfolio page are clicked
    $("#foodeaze").click(function(){
        window.open("https://github.com/thescottbob/FoodEaze").attr("target", "_blank");
    })

    $("#enviral").click(function(){
        window.open("https://github.com/kyleconyers/Enviral").attr("target", "_blank");
    })

    $("#bamazon").click(function(){
        window.open("https://github.com/thescottbob/Bamazon").attr("target", "_blank");
    })

});