'use strict';


// Declare app level module which depends on filters, and services
var angularApplication = angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'mobile-angular-ui',
  'ngTouch'
]);

angularApplication.factory('GeneralData',function($http){
  var GeneralData = {
    projectList:[{
      title:'Помещение.kz'
      ,img:'/img/256x256/cat_birdhouse.png'
      ,text:'Проект о недвижимости и про недвижимость.'
      ,price:3
      ,worklines:[
        {
          title:'Разработчик'
          ,type:1
          ,progress:0
          ,deadline:5
        }
        ,{
          title:'SMM'
          ,type:2
          ,progress:0
          ,deadline:5
        }
        ,{
          title:'Дизайнер'
          ,type:3
          ,progress:0
          ,deadline:2
        },
      ]
    },{},{}]
  }
  return GeneralData;
});

angularApplication.directive('eatClick', function() {
    return function(scope, element, attrs) {
        $(element).click(function(event) {
            event.preventDefault();
        });
    }
});

angularApplication.directive('reloadClick', function() {
    return function(scope, element, attrs) {
        $(element).click(function(event) {
          // event.preventDefault();
          // window.location.href = attrs.href;
          // window.location.reload(true);
        });
    }
});

angularApplication.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {templateUrl: 'partials/partial1.html', controller: 'MyCtrl1'});
  $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: 'MyCtrl2'});
  $routeProvider.when('/view3', {templateUrl: 'partials/partial3.html', controller: 'MyCtrl3'});
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);


