var HangManCtrl = function($scope) {
  $scope.currentWord = "angular";
  $scope.hiddenCharls = [];
  $scope.win = " ";
  $scope.lose = " ";
  $scope.rArm = " ";
  $scope.lArm = " ";
  $scope.head = " ";
  $scope.bod = " ";
  $scope.rLeg = " ";
  $scope.lLeg = " ";


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
  		if($scope.guesses.length = 6){
  			$scope.lose = "You LOSE. And you're DEAD.";
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



