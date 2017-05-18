var angularStore = angular.module('AngularStore', ['ngRoute','ui.router','main-ctrl','login-ctrl','highcharts-ng','home-ctrl','user-ctrl']);

angularStore.config(function($urlRouterProvider){
  $urlRouterProvider.otherwise('/');
})
.config(function($stateProvider){
  $stateProvider
    .state('login', {
      url: '/',
      templateUrl: 'partials/login.html',
      controller: 'loginController'//,
      //controllerAs: 'homeCtrl'
    })
    .state('home',{
      url: '/home',
      templateUrl: 'partials/home.html',
      controller: 'homeController'
    })
    .state("home.aboutus",{
      url:"/intro",
      templateUrl:"/partials/aboutus.html",
      controller:"aboutusCtrler"
    })
    .state("home.analy",{
      url:"/analy",
      templateUrl:'/partials/analy.html',
      controller:"analyCtrler"
    })
    .state('home.main',{
      url: '/main',
      templateUrl: 'partials/main.html',
      controller: 'mainController'
    })
    .state('home.user',{
      url: '/user',
      templateUrl: 'partials/user.html',
      controller: 'userController'
    })
})
.controller("aboutusCtrler",function($scope){
  
})
.controller("analyCtrler",function($scope){
   $(function () {
    $('#container').highcharts({
        chart: {
           type: 'bar',
           backgroundColor: {
                linearGradient: [0, 0, 500, 500],
                stops: [
                    [0, 'rgb(255, 255, 255)'],
                    [1, 'rgb(200, 200, 255)']
                ]
            },
            borderColor: '#EBBA95',
            borderRadius: 20,
            borderWidth: 2,
        },
        credits: {
            position:{
                align: 'right',
                style:{
                  "fontSize": "20px"
                },
                  x: -20,
                  y:-15
              },
              text: 'yiguo.com',
              href: 'http://www.yiguo.com'
        },
        title: {
            text: '全国水果销量部分地区统计图'
        },
        xAxis: {
            categories: ['苹果', '橘子', '梨', '葡萄', '香蕉']
        },
        yAxis: {
            min: 0,
            title: {
                text: '水果消费总量'
            }
        },
        legend: {
            reversed: true
        },
        plotOptions: {
            series: {
                stacking: 'normal'
            }
        },
        series: [{
            name: '东北',
            data: [7, 3, 2, 7, 4]
        }, {
            name: '华北',
            data: [5, 2, 5, 4, 2]
        }, {
            name: '华南',
            data: [3, 7, 6, 4, 5]
        },{
            name: '西北',
            data: [3, 5, 4, 3, 4]
        },{
            name: '西南',
            data: [2, 3, 3, 2, 5]
        }]
    });
});
});