$(function() {
    
    //nav 연결
    $("ul.main").eq(0).on("mouseover", function(){
        $("li.sub").eq(0).css({
            "opacity" : "1",
            "visibility" : "visible",
        });
    }).on("mouseleave", function(){
        $("li.sub").eq(0).css({
            "opacity" : "0",
            "visibility" : "hidden",
        });
    });
    $("ul.main").eq(1).on("mouseover", function(){
        $("li.sub").eq(1).css({
            "opacity" : "1",
            "visibility" : "visible",
        });
    }).on("mouseleave", function(){
        $("li.sub").eq(1).css({
            "opacity" : "0",
            "visibility" : "hidden",
        });
    });
    $("ul.main").eq(2).on("mouseover", function(){
        $("li.sub").eq(2).css({
            "opacity" : "1",
            "visibility" : "visible",
        });
    }).on("mouseleave", function(){
        $("li.sub").eq(2).css({
            "opacity" : "0",
            "visibility" : "hidden",
        });
    });
    $("ul.main").eq(3).on("mouseover", function(){
        $("li.sub").eq(3).css({
            "opacity" : "1",
            "visibility" : "visible",
        });
    }).on("mouseleave", function(){
        $("li.sub").eq(3).css({
            "opacity" : "0",
            "visibility" : "hidden",
        });
    });

    //silde fadein out
    var now = 0;
    var imgs = 3;
    //$("#slide img").eq(0).siblings().hide();
    //해당 영역 이외의 것들은  display: none 상태임.
    function slide(){
        console.log(now)
        $("#slide img").eq(now).fadeIn(1000);
        setTimeout(function(){
            $("#slide img").eq(now).fadeOut(1000);
            now++;
            if(now >=3){
                now = 0;
            }
            console.log(now)
        }, 2000);
        // if(now >= imgs){
        //     $("#slide img").eq(0).fadeIn(1000);
        //     $("#slide img").eq(now).fadeOut(2000);
        //     now = 0;
        // }else{
        //     $("#slide img").eq(now).fadeIn(1000);
        //     $("#slide img").eq(now).fadeOut(2000);
        //     now++;
        // }
    };
    slide();
    setInterval(function(){
        slide();
    }, 3000);


    //modal
    $("#cont1 .notice > p:nth-child(1)").on("click", function(){
        $("#popup").css("display","block");
    });
    $("#close-pop").on("click", function(){
        $("#popup").css("display","none");
    });


    //notice vs gallery
    $("#cont1 > #title > div").eq(0).on("click", function(){
        $("#cont1 > div:nth-child(2) > div").eq(0).css("display", "block");
        $("#cont1 > div:nth-child(2) > div").eq(1).css("display", "none");
        $("#cont1 > #title > div").eq(0).css("backgroundColor", "white");
        $("#cont1 > #title > div").eq(1).css("backgroundColor", "#a0a0a0");
    });
    $("#cont1 > #title > div").eq(1).on("click", function(){
        $("#cont1 > div:nth-child(2) > div").eq(0).css("display", "none");
        $("#cont1 > div:nth-child(2) > div").eq(1).css("display", "flex");
        $("#cont1 > #title > div").eq(0).css("backgroundColor", "#a0a0a0");
        $("#cont1 > #title > div").eq(1).css("backgroundColor", "white");
        
    });

})