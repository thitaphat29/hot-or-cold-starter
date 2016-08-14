  var secretNumber;
  var guessCount = 0;

$(document).ready(function(){

	/*--- Display information modal box ---*/
	$(".what").click(function(){
  	$(".overlay").fadeIn(1000);

	});

	/*--- Hide information modal box ---*/
	$("a.close").click(function(){
		$(".overlay").fadeOut(1000);
	});


  /*--- Check result ----*/
  $('form').submit(function(event) {

		event.preventDefault();
		checkNumber();

		guessCount++;
		$("#count").text(guessCount);

	});


  /*--- Game starts here! --*/
  $(".new").click(function(){
    newGame();
  });

  /*--- Game starts here! --*/
	newGame();

});

/*--- Step 1: New Game -----*/
function newGame(){
  guessCount = 0;

  console.log("new game");
  $("h2#feedback").text("Make your Guess!");
  $("#userGuess").val("");
  $("#guessButton").prop("disabled",false);
  $("#count").text(guessCount);
  $("ul#guessList li").remove();

  genNumber();
}

/*--- Step 2 Genarate a number ----*/ 
function genNumber(){
  secretNumber = Math.floor(Math.random()*100+1);
  console.log(secretNumber);
}

/*--- Step 3 Check your guess ---*/
function checkNumber(){
  var userGuess = $("#userGuess").val();
  console.log(secretNumber);
  console.log(userGuess);

  if(userGuess == secretNumber){
    $("h2#feedback").text("You Won! Click new game to play again!");
    $("#guessButton").prop("disabled",true);

  }else{
    guessStatus(userGuess);
  
    //display guess number 
    $("ul#guessList").append("<li>"+userGuess+"</li>");

    //clear textbox
    $("#userGuess").val("");
  }
}
    
/*--- Step 4: Check guess status --*/
function guessStatus(userGuess){

  var diffValue = Math.abs(userGuess-secretNumber);
  

  if(diffValue > 50){
    $("h2#feedback").text("Ice cold!");

  } else if(diffValue > 30){
  $("h2#feedback").text("Cold!");
  } else if(diffValue > 20){
  $("h2#feedback").text("Warm!");
  } else if(diffValue > 10) {
  $("h2#feedback").text("Hot!");
  } else {
  $("h2#feedback").text("Very hot !!");
  }

}


