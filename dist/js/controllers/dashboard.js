app.controller('DashboardCtrl', ['$scope', '$http', '$filter', '$modal', 'MyService', function($scope, $http, $filter,$modal, MyService) {

 $scope.filter = '';

   $http.get('http://52.33.127.122:1337/genero').then(function (resp) {
    $scope.groups = resp.data.results;

    var numero = $scope.groups.length;
    
    MyService.data.numero=numero;
// for (var i = 0;i<$scope.groups.length;i++){};
  });
   
	}]);