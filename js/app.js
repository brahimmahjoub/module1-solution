var app = angular.module('LunchCheck', []);
app.controller('LunchCheckController', LunchCheck);

LunchCheck.$inject = ['$scope']
function LunchCheck($scope) {
  $scope.items = ""; // contain string entered by user
  $scope.message = ""; // message would be displayed
  $scope.messageColor = ""; // contain directive class which represent the color of message;

  //function return a filtered items collections.
  $scope.itemsCollection = function() {
    var array = $scope.items.split(',');
    var filteredArray = [];
    angular.forEach(array, function(item) {
      if (item.trim()) {
        filteredArray.push(item);
      }
    });
    return filteredArray;
  };

  // this function check the length of filtered array
  //and affect a value to message and messageColor
  $scope.showMessage = function() {
    var length = $scope.itemsCollection().length;
    if(length > 0 && length <= 3) {
      $scope.message = "Enjoy!";
      $scope.messageColor = "green-color";
    } else if (length > 3){
      $scope.message = "Too much!";
      $scope.messageColor = "green-color";
    } else {
      $scope.message = "Please enter data first";
      $scope.messageColor = "red-color";
    }
  }

}
