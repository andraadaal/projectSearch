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
            controller:  ['$scope', function ($scope){
              $scope.iconClasses={
                  folder: 'glyphicon glyphicon-folder-open',
                  css: 'glyphicon glyphicon-star',
                  js: 'glyphicon glyphicon-gift',
                  html: 'glyphicon glyphicon-heart'
              };
            }],
            template: "<ul><children-render ng-repeat='member in data | filter:filterValue'></children-render></ul>"
        }
    });

    app.directive('childrenRender', function ($compile) {
        return {
            restrict: "E",
            replace: true,
            template: "<li id='icon'>{{' '+member.name}}</li>",
            link: function (scope, element) {

                if (angular.isArray(scope.member.children)) {
                    element.addClass(scope.iconClasses.folder);
                    element.append("<first-render filter-value='filterValue' data='member.children'></first-render>");
                    $compile(element.contents())(scope);
                }

                else {
                    element.addClass(getClass(scope.member.name, scope.iconClasses));
                }
            }
        }
    });

    function getClass(elName, icon){
        if (elName.indexOf('.html') !== -1) {
            return icon.html;
        }
        if (elName.indexOf('.js') !== -1) {
            return icon.js;
        }
        if (elName.indexOf('.css') !== -1) {
            return icon.css;
        }
        return icon.folder;
    };


})();