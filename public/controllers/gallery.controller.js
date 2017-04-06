angular.module('galPhoto')
.controller('GalleryCtrl',['$scope','$uibModal','instagram','Lightbox',function($scope,$uibModal,instagram,Lightbox){
                           
    $scope.names = [];
    var imgArray = [];
    
    instagram.fetchPopular(function(data){
        $scope.names=data;
        
        //console.log(data);
        angular.forEach(data,function(value){
            imgArray.push(value.profile_picture);
        });
        
        $scope.openLightboxModal = function(index){
            Lightbox.openModal(imgArray,index);
           // console.log("working");
        }
    })
}])