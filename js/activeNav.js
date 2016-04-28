$(function(){

function fadeInList() {
    var list = [theList];
    TweenMax.staggerFromTo(list, 1, {opacity:0}, {opacity:1}, 0.2);
  }

    var url = window.location.href; 

    $("#mainNav a").each(function() {
            
        if(url == (this.href)) { 
            $(this).closest("li").addClass("active");
            fadeInList();
        }
    });
});