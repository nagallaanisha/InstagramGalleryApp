angular.module('galPhoto')
.controller('GalleryCtrl',['$scope','instagram',function($scope,instagram){
                           
    $scope.names = [];
    instagram.fetchPopular(function(data){
        $scope.names=data;
        console.log(data);
    })
}])