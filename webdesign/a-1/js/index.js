$(function(){
    var now = 0;

    //슬라이드
    function start(){
        $(".slide img").eq(now).css("left","0px");
        setTimeout(() => {
            $(".slide img").eq(now).css("left","-100%");
            now += 1;
            if(now >= 3){
                now = 0;
            }
        }, 2000);
    }

    start();

    setInterval(function(){
        start();
    }, 3000);


    //메뉴 sub메뉴 뜨기
    $("nav").on("mouseenter", function(){
        $(this).css("height","100%");
        $("ul#sub-menu").css("opacity","1");
        $("ul#sub-menu").css("visibility","visible");
    });
    $("nav").on("mouseleave", function(){
        $(this).css("height","auto");
        $("ul#sub-menu").css("opacity","0");
        $("ul#sub-menu").css("visibility","hidden");
    });


    //공지 콘텐츠조작- 모달창
    $("#notice-conts > p:first-child").on("click", function(){
        $("#popup").css("display","block");
    });
    $("#popup-close").on("click", function(){
        $("#popup").css("display","none");
    });

    //공지 콘텐츠조작 공지사항/갤러리
    $("#notice").on("click", function(){
        $("#notice").css("backgroundColor","beige");
        $("#gallery").css("backgroundColor","#999999");
        $("#notice-conts").css("display","block");
        $("#gallery-conts").css("display","none");
    });
    $("#gallery").on("click", function(){
        $("#notice").css("backgroundColor","#999999");
        $("#gallery").css("backgroundColor","beige");
        $("#notice-conts").css("display","none");
        $("#gallery-conts").css("display","flex");
    });

});