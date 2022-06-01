$(function(){
    $("nav").on("mouseover", function(){
        $("#sub-nav").css({
            "opacity" : "1",
            "visibility" : "visible"
        });
        $("#gnb").css("height","auto");
    });
    $("nav, #sub-nav").on("mouseleave", function(){
        $("#sub-nav").css({
            "opacity" : "0",
            "visibility" : "hidden"
        });
    });


    //slide
    var now = 0;
    function slide(){
        $("#slide img").eq(now).fadeIn(1000);
        setTimeout(function(){
            $("#slide img").eq(now).fadeOut(1000);
            now++
            if(now >=3){
                now = 0;
            }
        }, 2000);
    }
    slide();
    setInterval(function(){
        slide();
    }, 3000);

    //notice
    $("#notice p:first-child").on("click", function(){
        $("#popup").css("display","block");
    });
    $("#popup > div > div:nth-child(2) > div").on("click", function(){
        $("#popup").css("display","none");
    })
    
})