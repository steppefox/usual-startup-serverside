'use strict';

/* Directives */

angular.module('myApp.directives', []).
directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
        elm.text(version);
    };
}]).directive('projectListDirective', function($timeout) {
	return {
	  	restrict:'A'
		,scope:{
	  		items:'=items'
		}
		, template: ''
			+'<div class="projectHiddenCarousel" style="display:none;">'
			  	+'<div class="projectItem" data-ng-repeat="item in items">'
					+'<div class="container-fluid"><div class="row">'
						+'<div class="col-xs-12">'
							+'<div class="projectHeader clearfix row">'
								+'<div class="col-xs-5"><img data-ng-src="{{item.img}}"/></div>'
								+'<div class="col-xs-7">'
									+'<div data-ng-bind="item.title" class="projectHeaderTitle"></div>'
									+'<div data-ng-bind="item.text" class="projectHeaderText"></div>'
								+'</div>'
							+'</div>'
							+'<div class="projectBody clearfix row">'
								+'<div class="col-xs-8">'
									+'<div class="projectBodyWorkline" data-ng-repeat="workline in item.worklines">'
										+'<i class="fa projectBodyWorklineIcon" data-ng-class="{\'fa-wrench\':workline.type==1,\'fa-comment-o\':workline.type==2,\'fa-crop\':workline.type==3}"></i>'
										+'<span class="projectBodyWorklineTitle" data-ng-bind="workline.title"></span>'
										+'<span class="projectBodyWorklineProgress" data-ng-bind-template="{{workline.progress}}/{{workline.deadline}}"></span>'
									+'</div>'
								+'</div>'
								+'<div class="col-xs-4">'
									+'<img src="/img/coin.png" style="max-height:30px; margin-right:5px;"/>'
									+'<span class="money-color" data-ng-bind-template="+{{item.price}}"></span>'
								+'</div>'
							+'</div>'
						+'</div>'
					+'</div></div>'
				+'</div>'
		  	+'</div>'
		  	+'<div class="projectCarousel"></div>'
	  	, link: function ($scope, element, attrs) {
	  		$scope.$watchCollection('items',function(){
		      	$timeout(function(){
		      		var target = element.find('.projectCarousel');
		      		var owl = target.data('owlCarousel');
	            	if(owl){
	            		owl.destroy();
	            	}
	            	var cont = element.find('.projectHiddenCarousel').html();
	            	target.html(cont);
			      	target.owlCarousel({
			      	    items : 1
			      	    ,itemsMobile : [479,1]
			      	    ,itemsTablet: [768,1]
			      	});
				});
	  		})	;
	 	}
	}
}).directive('usersListDirective', function() {
    return {
        restrict:'A'
    	,scope:{
    		items:'=items'
    	}
    	, template: ''
				+'<div class="usersListDirective">'
					+'<ul>'
						+'<li data-ng-repeat="item in items">'
							+'<span data-ng-bind="item.title" class="usersList-title"></span>'
						+'</li>'
					+'</ul>'
				+'</div>'
    		+''
        , link: function ($scope, element, attrs) {

        }
    }
});
