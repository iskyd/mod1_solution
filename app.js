(function () {
'use strict';

angular.module('LunchApp', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.foodList = "";
  $scope.isTooMuch = "";

  $scope.checkIfTooMuch = function () {
      if($scope.foodList == "") {
          $scope.isTooMuch = "Please enter data first";
          return;
      }
      var arr = $scope.foodList.split(',');
      var count = 0;
      for (var i = 0; i < arr.length; i++) {
          if(arr[i]) {
              count += 1;
          }
      }
      if(count <= 3) {
          $scope.isTooMuch = "Enjoy!"
      } else {
          $scope.isTooMuch = "Too much!"
      }
  };
}

})();
