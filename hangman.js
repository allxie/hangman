var HangManCtrl = function($scope) {
  $scope.currentWord = "angular";
  $scope.hiddenCharls = [];
  $scope.win = " ";
  $scope.lose = " ";
  $("#hangDraw").html("<br>&nbsp;&nbsp;____<br>&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;|<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_|_<br>&nbsp;&nbsp;&nbsp;&nbsp;|___|");


  $scope.addWord = function(){
   	$scope.currentWord = $scope.newWord;
   	$scope.newWord = "";
   	$scope.hiddenCharls = $scope.currentWord.split('');
   	$scope.hiddenCharls.forEach(function(el,id,arr){
			arr[id] = "_";
		});
		console.log("first one: ", $scope.hiddenCharls);
  };
  


  $scope.guesses = [];
  $scope.guessLetter = function(){
  	if($scope.guesses.indexOf($scope.letter) === -1 && $scope.currentWord.indexOf($scope.letter) === -1) {
  		$scope.guesses.push($scope.letter);

      switch ($scope.guesses.length) {
      case 0:

          break;
      case 1:
          $("#hangDraw").html("<br>&nbsp;&nbsp;____<br>&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;|<br>&nbsp;0&nbsp;&nbsp;&nbsp;&nbsp;|<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_|_<br>&nbsp;&nbsp;&nbsp;&nbsp;|___|");
          //$("#head").html("0");
          break;
      case 2:
          $("#hangDraw").html("<br>&nbsp;&nbsp;____<br>&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;|<br>\\0&nbsp;&nbsp;&nbsp;&nbsp;|<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_|_<br>&nbsp;&nbsp;&nbsp;&nbsp;|___|");

          //$("#rArm").html("/");
          break;
      case 3:
          $("#hangDraw").html("<br>&nbsp;&nbsp;____<br>&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;|<br>\\0/&nbsp;&nbsp;&nbsp;|<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_|_<br>&nbsp;&nbsp;&nbsp;&nbsp;|___|");
          
          //$("#lArm").html("\\");
          break;
      case 4:
          $("#hangDraw").html("<br>&nbsp;&nbsp;____<br>&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;|<br>\\0/&nbsp;&nbsp;&nbsp;|<br>&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;|<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_|_<br>&nbsp;&nbsp;&nbsp;&nbsp;|___|");
          //$("#bod").html("|");
          break;
      case 5:
          $("#hangDraw").html("<br>&nbsp;&nbsp;____<br>&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;|<br>\\0/&nbsp;&nbsp;&nbsp;|<br>&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;|<br>/&nbsp;&nbsp;&nbsp;&nbsp;_|_<br>&nbsp;&nbsp;&nbsp;&nbsp;|___|");

          //$("#lLeg").html("/");
          break;
      case 6:
          $("#hangDraw").html("<br>&nbsp;&nbsp;____<br>&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;|<br>\\0/&nbsp;&nbsp;&nbsp;|<br>&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;|<br>/&nbsp;\\&nbsp;&nbsp;_|_<br>&nbsp;&nbsp;&nbsp;&nbsp;|___|");
          $scope.lose = "You LOSE. And you're DEAD.";
          break;
      }
    }

		indOfGuessed = $scope.currentWord.indexOf($scope.letter)
		if ( indOfGuessed!= -1) {
			$scope.hiddenCharls[indOfGuessed] = $scope.letter;
			for(var i = indOfGuessed; i < $scope.hiddenCharls.length; i++){
				if ($scope.currentWord[i] === $scope.letter){
					$scope.hiddenCharls[i] = $scope.letter;
				}
			}
		}
		$scope.letter = "";
		console.log("scope Word array: ", $scope.hiddenCharls);
		if ($scope.hiddenCharls.indexOf("_") === -1){
			$scope.win = "You Won!";
		}
  };

};



