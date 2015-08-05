/**
 * Created by andradalechintan on 8/4/2015.
 */
(function(){
    var app = angular.module('search',[]);

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
        }
        $scope.searchInputValue = function(){

        }

        $scope.addRow=function(data){
            $scope.fileData.push({'type':data.type,'name':data.name});
            if (data.type==='dir'){
                console.log('e adevarat');
            }
            $scope.type='';
            $scope.name='';

        }
    }]);
})();