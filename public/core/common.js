///<reference path="../../typings/angularjs/angular.d.ts"/>
///<reference path="../../typings/jquery/jquery.d.ts"/>
///<reference path="../../typings/bootstrap/bootstrap.d.ts"/>
'use strict';
/* main */
var webApp = angular.module('webApp', []);
var menuList = [
    {
        name: '메뉴1',
        url: '#'
    },
    {
        name: '메뉴2',
        sub: [
            {
                name: '서브메뉴1',
                url: '#sub'
            },
            '-',
            {
                name: '서브메뉴2',
                url: '#sub2'
            }
        ]
    }
];
webApp.directive('webMenu', [function () {
        return {
            restrict: 'A',
            templateUrl: function (elem, attr) {
                return attr.viewPage || '/view/menu.html';
            },
            link: function (scope, elem, attr) {
                scope.menus = menuList;
                scope.title = attr.title || 'title';
            }
        };
    }]);
