angularStore.directive('rightInfo', function(){
  return {
    restrict: 'ECMA',
    templateUrl: './partials/directiveRightInfo.html',
    scope: true,
    link: function(scope, elem, attrs) {

    },
    controller: function($scope) {
      $scope.urlBox=[
        {
          "url":"http://yiguo.com",
          "name":"易果生鲜网官方网站"
        },
        {
          "url":"http://peiruihe.win",
          "name":"易果生鲜移动端网站"
        },
        {
          "url":"",
          "name":"易果生鲜客服电话"
        },
        {
          "url":"",
          "name":"易果生鲜网投诉建议"
        }
      ];
      $scope.submitData=function(){
       console.log(1)
      }
    }
  }
})
