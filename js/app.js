/**
 * Created by andradalechintan on 8/4/2015.
 */
(function(){
    var app = angular.module('search',[]);

    var inputV;

    app.controller('SearchController', ['$scope', function($scope) {

        $scope.fileData = [{
            type: 'dir',
            name: 'app',
            children: [{
                type: 'file',
                name: 'index.html'
            }, {
                type: 'dir',
                name: 'js',
                children: [{
                    type: 'file',
                    name: 'main.js'
                }, {
                    type: 'file',
                    name: 'app.js'
                }, {
                    type: 'file',
                    name: 'misc.js'
                }, {
                    type: 'dir',
                    name: 'vendor',
                    children: [{
                        type: 'file',
                        name: 'jquery.js'
                    }, {
                        type: 'file',
                        name: 'underscore.js'
                    }]
                }]
            },
                {
                    type: 'dir',
                    name: 'css',
                    children: [{
                        type: 'file',
                        name: 'reset.css'
                    }, {
                        type: 'file',
                        name: 'main.css'
                    }]
                }]
        }];

        $scope.inputValue = '';
        $scope.getInputValue = function(value){
            $scope.inputValue = value;
            inputV=$scope.inputValue;
        }

    }]);

    app.directive('firstRender', function () {
        return {
            restrict: "E",
            replace: true,
            scope: {
                data: '=',
                filterValue: '='
            },
            template: "<ul><children-render ng-repeat='member in data | filter:filterValue'></children-render></ul>"
        }
    });

    app.directive('childrenRender', function ($compile) {
            return {
                restrict: "E",
                replace: true,
                template: "<div ng-switch on='member.type'>"+
                                "<li ng-switch-when='dir' class='glyphicon glyphicon-folder-open' id='list-item'>{{' '+member.name}}</li>"+
                                "<li ng-switch-when='file' class='glyphicon glyphicon-file' id='list-item'>{{' '+member.name}}</li>"+
                         "</div>",
                link: function (scope, element) {
                    if (angular.isArray(scope.member.children)) {
                        element.append("<first-render data='member.children' filter-value='filterValue'></first-render>");
                        $compile(element.contents())(scope)
                    }
                }
            }
    });


})();