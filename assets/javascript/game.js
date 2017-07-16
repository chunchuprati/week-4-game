$(document).ready(function() {
	crystals = ['assets/images/red.png','assets/images/blue.png','assets/images/yellow.png','assets/images/green.png'];

	var sumVal = 0;
	var wins = 0;
	var losses = 0;
	$("#numberWins").text(wins);
	$("#numberLosses").text(losses);

	assignCrystalVals();
	initializeGame();

	function assignCrystalVals() {
		var numbers = [];

		while (numbers.length < 4) {
			var flag=false;
			var randomNumber = Math.ceil(Math.random() * 12);
			// console.log(randomNumber);
			if(typeof randomNumber === "undefined") {
				//Do nothing
			}
			else {
				for (var j=0; j<numbers.length; j++){
					if(randomNumber === numbers[j]){
						flag=true; 
						break;
					}
				}
				
				if(!flag){
					numbers[numbers.length]=randomNumber;
				}
			}
		}

		for (i = 0; i < numbers.length; i++) {
			var imageCrystal = $('<img>');
			imageCrystal.attr('data-num', numbers[i]);
			imageCrystal.attr('src', crystals[i]);
			imageCrystal.attr('alt', 'crystals');
			imageCrystal.addClass('image')
			$('#gems').append(imageCrystal);
		}
	}

	function initializeGame() {
		sumVal = 0; 

		$("#finalTotal").text(sumVal);

		function randomNum(min, max) {
			return Math.floor(Math.random()*(max-min+1)+min);
		}

		var numberToGuess = randomNum(20, 39);
		$("#randomNumber").text(numberToGuess);

		$('.image').on('click', function(){
		    sumVal = sumVal + parseInt($(this).data('num'));
		    
		    console.log(sumVal);
		    $('#finalTotal').text(sumVal);

		    if (sumVal == numberToGuess){
		      wins ++;
		      $('#numberWins').text(wins);
		      
		      $('#gems').empty();
		    
		      assignCrystalVals();
		      initializeGame();
		        
		    } else if ( sumVal > numberToGuess){
		        losses ++;
		        $('#numberLosses').text(losses);
		        
		        $('#gems').empty();
		      
		        assignCrystalVals();
		        initializeGame();
		    }
		});
	}
});