var buttoncolors=["green","red","yellow","blue"];
var randomchosencolor;
var gamepattern=[];
var userclickedpattern=[];
var level=0;
var start=false;

function nextsequence(){
    userclickedpattern = [];
    var n=Math.random();
    var n=n*4;
    var randomnumber=Math.floor(n);
    randomchosencolor=buttoncolors[randomnumber];
    gamepattern.push(buttoncolors[randomnumber]);
    console.log(randomchosencolor);
    $("#"+randomchosencolor).fadeIn(100).fadeOut(100);
    $("#"+randomchosencolor).fadeIn(100);     
     playsound(randomchosencolor);
     level=level+1;
     $("h1").text("level "+  level);
   
} $(".btn").click(function(){
 var userchosencolor=this.id;
 userclickedpattern.push(userchosencolor);
 playsound(userchosencolor);
 animatepress(userchosencolor); 
 checkAnswer(userclickedpattern.length-1);
}
)

$(document).keydown(function(){if (!start) {

    $("h1").text("Level " + level);
    nextsequence();
    start = true;
  }
});
function playsound(name){
    var audio=new Audio("sounds/" +name +".mp3");
    audio.play();
}
function animatepress(currentcolor){
$("#"+currentcolor).addClass("pressed");
setTimeout(() => {
    $("#"+currentcolor).removeClass("pressed");
}, 100);
}
function checkAnswer(currentLevel) {

    if ( gamepattern[currentLevel]=== userclickedpattern[currentLevel]) {
      if (userclickedpattern.length === gamepattern.length){
        setTimeout(function () {
          nextsequence();
        }, 1000);
      }
    } else {
      playsound("wrong");
      $("body").addClass("game-over");
      $("#level-title").text("Game Over, Press Any Key to Restart");

      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);

      startOver();
    }
}
function startOver() {
    level = 0;
    gamepattern = [];
    start = false;
  }