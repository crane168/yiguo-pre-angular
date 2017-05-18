
homeCtrl.controller('homeController', ['$scope','$state',function($scope,$state){
  $scope.nowPageIndex=1;
  $scope.changePageIndex=function(index){
    // switch(index){
    //   case 1:
    //     $state.go('home.main');
    //     break;
    //   case 2:
    //     $state.go('home.user');
    //     break;
    // }
    $scope.nowPageIndex=index;
  }
}])
