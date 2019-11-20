var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope) {
        $scope.memeimgs = [
            {url: 'https://imgflip.com/s/meme/Matrix-Morpheus.jpg'}, //Matrix morepheus
            {url: 'https://imgflip.com/s/meme/One-Does-Not-Simply.jpg'}, //Boromir one does not simply
            {url: 'https://imgflip.com/s/meme/The-Most-Interesting-Man-In-The-World.jpg'}, //most interesting man
            {url: 'https://imgflip.com/s/meme/Creepy-Condescending-Wonka.jpg'}, //condescending wonka
            {url: 'https://imgflip.com/s/meme/Brace-Yourselves-X-is-Coming.jpg'}, //brace yourselves
            {url: 'https://i.imgflip.com/8iqed.jpg?a436603'}, //success baby
            {url: 'https://imgflip.com/s/meme/Overly-Attached-Girlfriend.jpg'}, //attached girlfrield
            {url: 'https://imgflip.com/s/meme/Bad-Luck-Brian.jpg'}, //bad luck brian
            {url: 'https://i.imgflip.com/fnekm.jpg?a436603'}, //what if rave
            {url: 'https://imgflip.com/s/meme/Yo-Dawg-Heard-You.jpg'}, //yo dawg
            {url: 'https://imgflip.com/s/meme/Picard-Wtf.jpg'}, //picard wtf
            {url: 'https://imgflip.com/s/meme/Ancient-Aliens.jpg'}, //not saying its aliens but
            {url: 'https://imgflip.com/s/meme/Good-Guy-Greg.jpg'}, //good guy greg
            {url: 'https://imgflip.com/s/meme/That-Would-Be-Great.jpg'}, //that would be great
            {url: 'https://imgflip.com/s/meme/Super-Cool-Ski-Instructor.jpg'}, //gonna have a bad time
            {url: 'https://i.imgflip.com/a1gl9.jpg?a436603'}, //joker loses mind
            {url: 'https://i.imgflip.com/31wy7e.jpg?a436603'}, //rent too damn high/serious preacher
            {url: 'https://imgflip.com/s/meme/Mocking-Spongebob.jpg'}, //mocking spongebob
            {url: 'https://imgflip.com/s/meme/X-X-Everywhere.jpg'}, //x x everywhere
            {url: 'https://imgflip.com/s/meme/Disaster-Girl.jpg'}, //disaster girl
            {url: 'https://imgflip.com/s/meme/Futurama-Fry.jpg'}, //futurama fry
            {url: 'https://imgflip.com/s/meme/First-World-Problems.jpg'}, //first world problems
            {url: 'https://imgflip.com/s/meme/Y-U-No.jpg'}, //Y U NO
            {url: 'https://imgflip.com/s/meme/Dr-Evil-Laser.jpg'}, //dr evil laser
			//

        ];
        
        $scope.captionselect = [
          {option: 'What If I Told You'},
          {option: 'One Does Not Simply'},
          {option: 'Brace Yourselves'},
          {option: 'I Don\'t Always'},
          {option: 'Yo dawg'},
          {option: 'Why the Fuck'},
          {option: 'I\'m Not Sayin It\'s Aliens'},
          ];
        
        $scope.captionselect2 = [
          {option: 'But It\'s Aliens'},
          {option: 'Tell Me All About'},
          {option: 'But when I do'},
          {option: 'So I Put XX In Your XX'},
          {option: 'That\'d Be Greeeat'},
          {option: 'You\'re Gonna Have a Bad Time'},
          {option: 'And Everybody Loses Their Minds'},
          {option: 'Is too damn high'},
          {option: 'Are too damn high'},
          ];

$scope.addMemeImg = function () {
  $scope.memeimgs.push({url:$scope.formAddMemeImg});
  $scope.formAddMemeImg = '';
};


$scope.setThisURL = function (element) {
   $scope.link = (element.url);
   }
    });
  
app.directive('memeapp', function() {
    return {
      restrict: 'E'
    };
  });
  
app.directive('clear', function() {
    return {
      restrict: 'E'
    };
  });
  
app.directive('memecont', function() {
    return {
      restrict: 'E'
    };
  });
  
app.directive('addmeme', function() {
    return {
      restrict: 'E'
    };
  });
  
app.directive('instructions', function() {
    return {
      restrict: 'E'
    };
  });
  
app.directive('captionset', function() {
    return {
      restrict: 'E'
    };
  });
  
app.directive('captionset-top', function() {
    return {
      restrict: 'E'
    };
  });
  
app.directive('captionset-btm', function() {
    return {
      restrict: 'E'
    };
  });
  
app.directive('captionset-chng', function() {
    return {
      restrict: 'E'
    };
  });
  
app.directive('memethumbs', function() {
    return {
      restrict: 'E'
    };
  });
  
app.directive('memethumb', function() {
    return {
      restrict: 'E'
    };
  });
    
app.directive('mcaption', function() {
    return {
      restrict: 'E',
      templateUrl: 'caption.html'
    };
  });
  
app.directive('mcaption2', function() {
    return {
      restrict: 'E',
      templateUrl: 'caption2.html'
    };
  });
  
app.directive('mcaption3', function() {
    return {
      restrict: 'E',
      templateUrl: 'caption3.html'
    };
  });
  
app.directive('mcaption4', function() {
    return {
      restrict: 'E',
      templateUrl: 'caption4.html'
    };
  });
  
app.directive('mcaption5', function() {
    return {
      restrict: 'E',
      templateUrl: 'caption5.html'
    };
  });
  
app.directive('mcaption6', function() {
    return {
      restrict: 'E',
      templateUrl: 'caption6.html'
    };
  });
  
app.directive('memeimg', function() {
    return {
      restrict: 'E',
      templateUrl: 'memeimg.html'
    };
  });
  
app.directive('memeurlinput', function() {
    return {
      restrict: 'E',
      templateUrl: 'meme-url-input.html'
    };
  });
  
app.directive('makecaptiondark', function() {
    return {
      restrict: 'E',
      templateUrl: 'makecaptiondark.html'
    };
  });
  
app.directive('makecaptionlight', function() {
    return {
      restrict: 'E',
      templateUrl: 'makecaptionslight.html'
    };
  });
  
app.directive('makecaptionsmaller', function() {
    return {
      restrict: 'E',
      templateUrl: 'makecaptionsmaller.html'
    };
  });
  
app.directive('makecaptionsbig', function() {
    return {
      restrict: 'E',
      templateUrl: 'makecaptionsbigagain.html'
    };
  });

app.controller('customersCtrl', function($scope, $http) {
    $http.get("memeurls.php")
    .success(function(response) {$scope.names = response.records;});
});

