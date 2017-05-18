loginCtrl.controller('loginController',function($scope,$http,$location){
  $scope.loginTo=function(){
    // console.log($scope.username);
    $http({
      url:"http://localhost:3000/user/getByUsername?username="+$scope.username
    }).then(function(res){
      if(res.data.length>0){
        // console.log(res.data)
        if(res.data[0].password==$scope.password){
          localStorage.setItem("username",$scope.username);
          $location.url('/home/analy');
        }else{
          alert("密码错误,请重新输入！");
        }
      }else{
        alert("不存在此用户！");
        // console.log(res.data)
      }
    })
  }
})
