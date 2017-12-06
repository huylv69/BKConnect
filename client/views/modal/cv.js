angular.module('app')
    .directive('applicationForm', function () {
        return {
            restrict: 'E',
            scope: true,
            transclude: true,
            replace: false,
            templateUrl: 'views/modal/cv.html',
            link: function postLink(scope, element, attrs) {
                scope.$watch(attrs.visible, function (value) {
                    if (value == true)
                        $(element).modal('show');
                    else
                        $(element).modal('hide');
                });

                $(element).on('shown.bs.modal', function () {
                    scope.$apply(function () {
                        scope.$parent[attrs.visible] = true;
                    });
                });

                $(element).on('hidden.bs.modal', function () {
                    scope.$apply(function () {
                        scope.$parent[attrs.visible] = false;
                    });
                });
            }
        }
    })