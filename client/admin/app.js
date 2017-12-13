
var BASE_URL = location.origin + '/api/';
angular
    .module('admin', [
        'ui.router',
        'ui.router.state.events',
        'ngSanitize',
        'ngFileUpload',
        'service.localStorage',
        'service.company',
        'service.auth',
        'service.student',
        'service.post',
        'datatables'
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
                controller: 'LoginController',
                requireLogin: false
            })
            .state('post', {
                title: 'Quản lý bài đăng',
                url: '/post',
                templateUrl: 'admin/views/post.html',
                controller: 'PostController',
                requireLogin: true

            })
            .state('student', {
                title: 'Quản lý sinh viên',
                url: '/student',
                templateUrl: 'admin/views/student.html',
                controller: 'StudentController',
                requireLogin: true
            })
            .state('block', {
                title: 'Danh sách sinh viên bị block',
                url: '/block',
                templateUrl: 'admin/views/student-block.html',
                controller: 'StudentBlockController',
                requireLogin: true
            })
            .state('home', {
                title: 'Trang chủ Admin ',
                url: '/home',
                templateUrl: 'admin/views/home.html',
                controller: 'RequestController',
                requireLogin: true
            })
            .state('company', {
                title: 'Trang chủ Admin ',
                url: '/company',
                templateUrl: 'admin/views/company.html',
                controller: 'ListCompanyController',
                requireLogin: true
            })
            ;

        $urlRouterProvider.otherwise('home');
    }])

    .run(["$rootScope", '$state', '$mLocalStorage', '$location',
        function ($rootScope, $state, $mLocalStorage, $location) {
            function isRealValue(obj) {
                return obj && obj !== 'null' && obj !== 'undefined';
            }
            $rootScope.location = $location;
            //get currentUser
            $rootScope.currentAdmin = $mLocalStorage.getItem('adminInfo');
            $rootScope.$state = $state;
            console.log($state.includes)
            $rootScope.$on('$stateChangeStart', function (event, toState, toParams) {
                console.log($location.path() !== '/login')
                var requireLogin = toState.requireLogin;
                if (requireLogin && $rootScope.currentAdmin == null) {
                    event.preventDefault();
                    $state.go('login');
                    $('.wrapper').addClass('hiden');
                }

            });

        }]).directive('loadingPane', function ($timeout, $window) {
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
        });

angular.module('admin').controller('LogoutController', ['$scope', '$rootScope', '$mLocalStorage', '$state',
    function ($scope, $rootScope, $mLocalStorage, $state) {
        $scope.logout = function () {
            swal({
                title: "Bạn có thực sự muốn thoát?",
                text: "Bạn sẽ cần đăng nhập lại lần sau khi vào trang quản trị!",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })
                .then((out) => {
                    if (out) {
                        $mLocalStorage.deleteItem('adminInfo');
                        $rootScope.currentAdmin = null;
                        $scope.user = $rootScope.currentAdmin;
                        $state.go("login");
                    } else {
                    }
                });
        }
    }])