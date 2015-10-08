///<reference path="../../typings/angularjs/angular.d.ts"/>
///<reference path="../../typings/jquery/jquery.d.ts"/>
///<reference path="../../typings/bootstrap/bootstrap.d.ts"/>

'use strict';


/* main */

var webApp = angular.module('webApp',[]);
var menuList = {
	
}


webApp.directive('webMenu', [()=>{
	return {
		restrict  :'A',
		templateUrl : (scope,elem,attr) =>{
			return attr.viewPage || '/view/menu.html';
		},
		link : (scope,elem,attr) =>{
			
		}
	}
}]);