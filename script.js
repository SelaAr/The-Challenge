$(".Task2").hide();
$(".BTimage").hide();
$(".CTimage").hide();
$(".Task4").hide();
$(".Task5").hide();
$(".Task6").hide();
$(".Task7").hide();

$(".one").click(function(){
    $(".Task2").show();
});

$(".buttonban").click(function(){
    $(".CTimage").show();
});

$(".buttonCT").click(function(){
    $(".BTimage").show();
});

$(".CTimage").mouseenter(function(){
    $("body").css("background-color", "green");
     $("Task4").show();
});

$(".BTimage").mouseenter(function(){
    $("body").css("background-color", "red");
});

$(".CTimage").mouseleave(function(){
     $(".Task4").show();
     $("body").css("background-color", "white");
});

$(".BTimage").mouseleave(function(){
     $(".Task4").show();
     $("body").css("background-color", "white");
});

$(".Right").click(function(){
    $(".Task5").show();
});

$(".Left").click(function(){
    $(".Task5").show();
});

$("img").dblclick(function(){
    $(".Task6").show();
});

$(".green").click(function(){
    $(".Task7").show();
});

$(".red").click(function(){
    $(".Task7").show();
});

$(".hover").hover(function(){
    $(".Open").show();
    $(".hover").hide();
});




