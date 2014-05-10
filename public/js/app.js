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

angularApplication.controller('sideBarCtrl',function($scope,GeneralData){
  $scope.GeneralData = GeneralData;

});
angularApplication.factory('GeneralData',function($http){
  var GeneralData = {
    projectList:[{
      title:'Помещение.kz'
      ,img:'/img/256x256/cat_birdhouse.png'
      ,text:'Проект о недвижимости и про недвижимость.'
      ,price:4
      ,worklines:[
        {
          title:'Разработчик'
          ,type:1
          ,progress:0
          ,deadline:5
        }
        ,{
          title:'SMM'
          ,type:4
          ,progress:0
          ,deadline:5
        }
        ,{
          title:'Дизайнер'
          ,type:2
          ,progress:0
          ,deadline:2
        },
      ]
    },
    {
      title:'Сланцы.kz'
      ,img:'/img/256x256/cat_skull.png'
      ,text:'Выложи, купи, продай и убегай!'
      ,price:2
      ,worklines:[
        {
          title:'Разработчик'
          ,type:1
          ,progress:0
          ,deadline:1
        }
        ,{
          title:'SMM'
          ,type:4
          ,progress:0
          ,deadline:1
        }
      ]
    },
    {
      title:'Фильмы.kz'
      ,img:'/img/256x256/cat_wizard.png'
      ,text:'Киноиндустрия и расписание фильмов в Армане - это магия!'
      ,price:1
      ,worklines:[
        {
          title:'SMM'
          ,type:4
          ,progress:0
          ,deadline:5
        }
        ,{
          title:'Дизайнер'
          ,type:2
          ,progress:0
          ,deadline:5
        },
      ]
    }]
    ,usersList:[
      {
        id:'123'
        ,title:'Лёша'
        ,money: 17
      }
      ,{
        id:'321'
        ,title:'Дастан'
        ,money: 11
      }
    ]
    ,featuresList:[
        {"id":1, "image":"/img/256x256/cat_vote.png","worker":"Программист", "type":1, "feature":{"type":1, "price":2, "name":"Проверка", "text":"Пришла проверка, сервера опечатали, заплатите и подождите пару дней." }}
      , {"id":2, "image":"/img/256x256/cat_vote.png","worker":"Дизайнер", "type":2, "feature":{"type":1, "price":2, "name":"БУМ", "text":"info text" }}
      , {"id":3, "image":"/img/256x256/cat_vote.png","worker":"Менеджер", "type":3, "feature":{"type":1, "price":2, "name":"БУМ", "text":"info text" }}
      , {"id":4, "image":"/img/256x256/cat_vote.png","worker":"SMM", "type":4, "feature":{"type":1, "price":2, "name":"БУМ", "text":"info text" }}
    ]
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
  $routeProvider.when('/view1', {templateUrl: '/partials/partial1.html', controller: 'MyCtrl1'});
  $routeProvider.when('/view2', {templateUrl: '/partials/partial2.html', controller: 'MyCtrl2'});
  $routeProvider.when('/view3', {templateUrl: '/partials/partial3.html', controller: 'MyCtrl3'});
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);


