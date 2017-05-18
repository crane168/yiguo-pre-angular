userCtrl.controller('userController',function($scope,$http,$filter){

  //获取分类的下标
  $scope.bigIndex=1;
  //判断全部选中或者全部不选中
  $scope.isAllselected=false;
  //将选中的用户的id值存储
  $scope.selected = [];
  //删除操作的信息记录
  $scope.modifyInfo={};
  //确定每页显示的数量
  $scope.pageSize=10;
  //显示用户信息
  $scope.showGoodList=[];
  //记录查找前的用户信息
  $scope.beforeFilter=[];
  //记录查找后的用户信息
  $scope.afterFilter=[];
  //记录当前页数
  $scope.pageIndex=1;
  //记录查找信息
  $scope.search="";


  //用户信息初始化
  $http({
    url:'http://takozhang.cn:3000/user/selectAll'
  }).then(function(res){
    $scope.goodList=res.data;
    $scope.beforeFilter=$scope.goodList;
    $scope.afterFilter=$scope.goodList;
    $scope.showGoodList=$scope.afterFilter.slice(($scope.pageIndex-1)*$scope.pageSize,$scope.pageIndex*$scope.pageSize);
  })

  //当查找时的数据更新
  $scope.changeSearch=function(){
    $scope.afterFilter = $filter('filter')($scope.beforeFilter, $scope.search);
    $scope.pageIndex=1;
    $scope.showGoodList=$scope.afterFilter.slice(($scope.pageIndex-1)*$scope.pageSize,$scope.pageIndex*$scope.pageSize);
  }

  //点击页数时的数据更新
  $scope.changePage=function(index){
    $scope.pageIndex=index+1;
    $scope.search="";
    $scope.showGoodList=$scope.afterFilter.slice(($scope.pageIndex-1)*$scope.pageSize,$scope.pageIndex*$scope.pageSize);
  }

  //点击上一页的数据更新
  $scope.prev=function(){
    if($scope.pageIndex>1){
      $scope.pageIndex--;
      $scope.search="";
      $scope.showGoodList=$scope.afterFilter.slice(($scope.pageIndex-1)*$scope.pageSize,$scope.pageIndex*$scope.pageSize);
    }
    console.log($scope.pageIndex);
  }

  //点击下一页的数据更新
  $scope.next=function(){
    if($scope.pageIndex<$scope.afterFilter.length/$scope.pageSize){
      $scope.pageIndex++;
      $scope.search="";
      $scope.showGoodList=$scope.afterFilter.slice(($scope.pageIndex-1)*$scope.pageSize,$scope.pageIndex*$scope.pageSize);
    }
    console.log($scope.pageIndex);
  }

  //新增用户
  $scope.addNew = function(){
    console.log("新增用户");
  }

  //获取修改用户的值
  $scope.getModify = function(event){
    var getId=event.target.dataset.id;
    for(var i=0;i<$scope.goodList.length;i++){
      if($scope.goodList[i]._id==getId){
        $scope.modifyInfo=$scope.goodList[i];
      }
    }
  }

  //修改用户信息
  $scope.modifyNew = function(){
    console.log($scope.modifyInfo);
  }


  $scope.delete=function(){
    if($scope.selected.length==0){
      alert("请选中用户时候再删除");
    }else{


      for(var i=0;i<$scope.selected.length;i++){
        for(var j=0;j<$scope.goodList.length;j++){
          if($scope.goodList[j]._id==$scope.selected[i]){
            $scope.goodList.splice(j,1);
            j--;
          }
        }
        for(var k=0;k<$scope.afterFilter.length;k++){
          if($scope.afterFilter[k]._id==$scope.selected[i]){
            $scope.afterFilter.splice(k,1);
            k--;
          }
        }
      }
      $scope.pageIndex=1;
      $scope.showGoodList=$scope.afterFilter.slice(($scope.pageIndex-1)*$scope.pageSize,$scope.pageIndex*$scope.pageSize);
      //设置全选按钮
      if($scope.isAllselected){
        $scope.isAllselected=!($scope.isAllselected);
        $scope.selected=[];
        $scope.checkAll=false;
      }
    }
  }



  var updateSelected = function(action,id){
    if(action == 'add' && $scope.selected.indexOf(id) == -1){
      $scope.selected.push(id);
    }
    if(action == 'remove' && $scope.selected.indexOf(id)!=-1){
      var idx = $scope.selected.indexOf(id);
      $scope.selected.splice(idx,1);
    }
  }

  $scope.updateSelection = function($event, id){
    var checkbox = $event.target;
    var action = (checkbox.checked?'add':'remove');
    updateSelected(action,id);
  }

  $scope.isSelected = function(id){
    return $scope.selected.indexOf(id)>=0;
  }

  //全选操作
  $scope.updateAll = function(){
    $scope.isAllselected=!($scope.isAllselected);
    if($scope.isAllselected){
      for(var i=0;i<$scope.showGoodList.length;i++){
        $scope.selected.push($scope.showGoodList[i]._id);
      }
    }else{
      $scope.selected=[];
    }
  }

  //点击分类按钮，获取分类值，并更新数据
  $scope.changeSub=function(index){
    var type=index;
    console.log(type);
    $http({
      url:'http://takozhang.cn:3000/user/getByType?type='+type
    }).then(function(res){
      $scope.afterFilter=res.data;
      $scope.beforeFilter=$scope.afterFilter;
      $scope.showGoodList=$scope.afterFilter.slice(($scope.pageIndex-1)*$scope.pageSize,$scope.pageIndex*$scope.pageSize);
      $scope.pageIndex=1;
      $scope.search="";
    })
  }

  //显示全部用户信息
  $scope.showAll=function(){
    $scope.afterFilter=$scope.goodList;
    $scope.showGoodList=$scope.afterFilter;
    $scope.beforeFilter=$scope.showGoodList;
    $scope.pageIndex=1;
    $scope.search="";
    $scope.showGoodList=$scope.afterFilter.slice(($scope.pageIndex-1)*$scope.pageSize,$scope.pageIndex*$scope.pageSize);
  }

  //确定分页页数
  $scope.range = function (start, end) {
     var ret = [];
     end=Math.ceil(end);
     if (!end) {
         end = start;
         start = 0;
     }
     for (var i = start; i <= end; i++) {
         ret.push(i);
     }
     return ret;
  };

});
