$(function(){

	console.log("his")
	$("nav").on("mouseover", function(){
		console.log("work")
		$("#sub ul").css({
			"display" :"block",
			"opacity" : "1",
			"visibility" : "visible",
			"z-index": "5"
		})
		$("nav").css("height","auto")
	}).on("mouseleave", function(){
		$("#sub ul").css({
			// "display" :"none",
			"opacity" : "0",
			"visibility" : "hidden"
		})
	});


	var now = 0;
	
	function start(){
		$("#slide img").eq(now).css("transform","translateX(0%)");
		setTimeout(function(){
			$("#slide img").eq(now).css("transform","translateX(150%)");
			now++;
			console.log(now)
			if(now >= 3){
				now = 0;
			}
		}, 2000);
	}
	start();
	setInterval(() => {
		start();
	}, 3000);
	

})