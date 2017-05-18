analyCtrl.controller("analyCtrler",function($scope){
	// $(function () {
	//     $('#container').highcharts({
	//         chart: {
	//             type: 'bar'
	//         },
	//         title: {
	//             text: '堆叠条形图'
	//         },
	//         xAxis: {
	//             categories: ['苹果', '橘子', '梨', '葡萄', '香蕉']
	//         },
	//         yAxis: {
	//             min: 0,
	//             title: {
	//                 text: '水果消费总量'
	//             }
	//         },
	//         legend: {
	//             reversed: true
	//         },
	//         plotOptions: {
	//             series: {
	//                 stacking: 'normal'
	//             }
	//         },
	//         series: [{
	//             name: '小张',
	//             data: [5, 3, 4, 7, 2]
	//         }, {
	//             name: '小彭',
	//             data: [2, 2, 3, 2, 1]
	//         }, {
	//             name: '小潘',
	//             data: [3, 4, 4, 2, 5]
	//         }]
	//     });
	// });
	// $scope.date = new Date();
	// $interval(function () {
	// 	$scope.date = new Date();
	// 	// console.log(11111)
	// }, 1000)
    $scope.options = {
        type: 'line'
    };
    $scope.chart = {
        options: {
            chart: {
                type: 'bar'
            }
        },
        series: [{
            data: [10, 15, 12, 8, 7]
        }],
        title: {
            text: 'Hello'
        }
    }
})