'use strict';

/* Controllers */

angularApplication.controller('MyCtrl1', function MyCtrl1($scope,GeneralData) {
	$scope.GeneralData = GeneralData;
	console.log($scope.GeneralData,GeneralData);
  	$scope.actions = {
    		init:function(){

        }
  	}

})
.controller('MyCtrl2',function MyCtrl2($scope) {

});
