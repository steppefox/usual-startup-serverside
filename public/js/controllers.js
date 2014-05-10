'use strict';

/* Controllers */

angularApplication.controller('MyCtrl1', function MyCtrl1($scope,GeneralData) {
	$scope.GeneralData = GeneralData;
  	$scope.actions = {
    		init:function(){

        }
  	}

})
.controller('MyCtrl2',function MyCtrl2($scope,GeneralData) {
	$scope.GeneralData = GeneralData;
})
.controller('MyCtrl3',function MyCtrl3($scope) {

})
.controller('SidebarCtrl',function SidebarCtrl($scope,GeneralData){
	$scope.GeneralData = GeneralData;
}).controller('BaseCtrl', function BaseCtrl($scope) {

	/**
	*Точка входа, как бы роутинг
	*/
	//создаём конект
	var socket = io.connect();
	//работаем с сокетом
	socket.on('connect', function(res){
		socket.emit('join')
	})

	  socket.on('statusWait', function(res) {
	  	if(res.name){
		  	$scope.$apply(function() {
		  		$scope.user = res;
		  	})
	  	}
	  })

	  socket.on('start', function(res) {
	  	if(res){

	  	}
	  	// $('.overlay').
	  })

});
