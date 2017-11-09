(function() {
    'use strict';
    (angular.module('ngDatepicker', ['ng'])).directive('ngDatepicker', [

        function() {
            return {
                restrict: 'E',
                template: function(element, attrs) {
                    return '<input name="{{name}}" ng-model="inputInner" ng-required="required" ng-readonly="readonly" ng-disabled="disabled" ng-class="class" ng-change="changeValue(inputInner)" type="text" class="{{nativeClass}}">';
                },
                scope: {
                    ngModel: '=ngModel',
                    ngDisabled: '=ngDisabled',
                    ngRequired: '=ngRequired',
                    ngClass: '=ngClass'
                },
                link: function(scope, element, attrs) {
                    var input;

                    scope.changeValue = function(value) {
                        scope.ngModel = value;
                    };

                    scope.setComponent = function() {
                        var config = {
                            onSelect: scope.changeValue
                        };

                        if (attrs.mindate) {
                            scope.readonly = true;
                            config.minDate = attrs.mindate;
                        }
                        if(attrs.maxdate){
                            scope.readonly = true;
                            config.maxDate = attrs.maxdate;
                        }
                        if(attrs.dateformat){
                            config.dateFormat = attrs.dateformat;
                        }
                        if (attrs.buttonimage) {
                            config.buttonImage = attrs.buttonimage;
                            config.buttonImageOnly = true;
                            config.showOn = "button";
                            config.buttonText = attrs.buttontext  || "";
                        }

                        $(input).datepicker(config);
                        scope.isComponent = true;
                    };

                    scope.$watch('ngModel', function(value) {
                        input = $(element).find('input');
                        if (!scope.isComponent) {
                            scope.setComponent();
                        }
                        scope.inputInner = value;
                    });

                    scope.$watch('ngDisabled', function(value) {
                        scope.disabled = value;
                    });

                    scope.$watch('ngRequired', function(value) {
                        scope.required = value;
                    });

                    scope.$watch('ngClass', function(value) {
                        scope.class = value;
                    });
                    
                    scope.name = attrs.ngName;
                    scope.nativeClass = attrs.nativeClass;
                }
            };
        }
    ]);
})(window, document);
