$(function(){

    //menu-submenu
    $("nav").on("mouseover", function(){
       $("#sub-menu").css({
           "opacity" : "1",
           "visibility" : "visible",
           "z-index" : "5",
       });
       $("#sub-menu > li").css("display", "flex")
       $("nav").css("height", "auto")
    }).on("mouseleave", function(){
        $("#sub-menu").css({
            "opacity" : "0",
            "visibility" : "hidden"
        });
    });


    //slide
    var now = 0;
    function slidemove(){
        $("#slide > img").eq(now).css("bottom", "0%");
        setTimeout(() => {
            $("#slide > img").eq(now).css("bottom", "-100%");
            now++;
            if(now >= 3){
                now = 0;
            };
        }, 2000);
        
    };
    slidemove();
    setInterval(function(){
        slidemove();
    }, 3000);


    //notice click- modal
    $("#notice > .cont > p:nth-child(1)").on("click", function(){
        $("#popup-wrap").css("display", "block");
    });
    $("#pop-close").on("click", function(){
        $("#popup-wrap").css("display", "none")
    })

})