
var BASE_URL = location.origin + '/api/';
angular
    .module('admin', [
        'ui.router',
        'ngSanitize',
        'ngFileUpload',
        'service.localStorage',
        'service.company',
        'service.auth',
        'service.student',
        'service.post'
    ])
    .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function ($stateProvider,
        $urlRouterProvider, $locationProvider) {
        // $locationProvider.html5Mode(true);
        $locationProvider.hashPrefix('');
        $stateProvider
            //anonymous 
            .state('login', {
                title: 'Đăng nhập vào trang admin',
                url: '/login',
                templateUrl: 'admin/views/login.html',
                controller: 'LoginController'
            })
            .state('post', {
                title: 'Quản lý bài đăng',
                url: '/post',
                templateUrl: 'admin/views/post.html',
                controller: 'PostController'
            })
            .state('student', {
                title: 'Quản lý sinh viên',
                url: '/student',
                templateUrl: 'admin/views/student.html',
                controller: 'StudentController'
            })
            .state('block', {
                title: 'Danh sách sinh viên bị block',
                url: '/block',
                templateUrl: 'admin/views/student-block.html',
                controller: 'StudentBlockController'
            })
            .state('home', {
                title: 'Trang chủ Admin ',
                url: '/home',
                templateUrl: 'admin/views/home.html',
                controller: 'RequestController',
                hideNavbar: true,
            })
            .state('company', {
                title: 'Trang chủ Admin ',
                url: '/company',
                templateUrl: 'admin/views/company.html',
                controller: 'ListCompanyController'
            })
            ;

        $urlRouterProvider.otherwise('home');

        // $('#test').addClass('hide');
        // $('#test').removeClass('hide');
    }])
    .directive('loadingPane', function ($timeout, $window) {
        return {
            restrict: 'A',
            link: function (scope, element, attr) {
                var directiveId = 'loadingPane';

                var targetElement;
                var paneElement;
                var throttledPosition;

                function init(element) {
                    targetElement = element;

                    paneElement = angular.element('<div>');
                    paneElement.addClass('loading-pane');

                    if (attr['id']) {
                        paneElement.attr('data-target-id', attr['id']);
                    }

                    var spinnerImage = angular.element('<div>');
                    spinnerImage.addClass('spinner-image');
                    spinnerImage.appendTo(paneElement);

                    angular.element('body').append(paneElement);

                    setZIndex();

                    //reposition window after a while, just in case if:
                    // - watched scope property will be set to true from the beginning
                    // - and initial position of the target element will be shifted during page rendering
                    $timeout(position, 100);
                    $timeout(position, 200);
                    $timeout(position, 300);

                    throttledPosition = _.throttle(position, 50);
                    angular.element($window).scroll(throttledPosition);
                    angular.element($window).resize(throttledPosition);
                }

                function updateVisibility(isVisible) {
                    if (isVisible) {
                        show();
                    } else {
                        hide();
                    }
                }

                function setZIndex() {
                    var paneZIndex = 500;

                    paneElement.css('zIndex', paneZIndex).find('.spinner-image').css('zIndex', paneZIndex + 1);
                }

                function position() {
                    paneElement.css({
                        'left': targetElement.offset().left,
                        'top': targetElement.offset().top - $(window).scrollTop(),
                        'width': targetElement.outerWidth(),
                        'height': targetElement.outerHeight()
                    });
                }

                function show() {
                    paneElement.show();
                    position();
                }

                function hide() {
                    paneElement.hide();
                }

                init(element);

                scope.$watch(attr[directiveId], function (newVal) {
                    updateVisibility(newVal);
                });

                scope.$on('$destroy', function cleanup() {
                    paneElement.remove();
                    $(window).off('scroll', throttledPosition);
                    $(window).off('resize', throttledPosition);
                });
            }
        };
    })
    .run(["$rootScope", '$state', '$mLocalStorage',
        function ($rootScope, $state, $mLocalStorage) {
            //get currentUser
            $rootScope.currentAdmin = $mLocalStorage.getItem('adminInfo');
            $rootScope.$state = $state;

        }]);

