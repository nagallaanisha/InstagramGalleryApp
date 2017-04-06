angular.module('galPhoto')

.factory('instagram',['$http','$sce',
    function($http,$sce) {
        return {
            fetchPopular: function(callback,response) {
       
                 var endpoint = $sce.trustAsResourceUrl('https://api.instagram.com/v1/users/self/?access_token=3037046297.74bc08b.2b6c3e4a8dda475183a802658bcbde6a');
               
          $http.jsonp(endpoint,{jsonpCallbackParam: 'callback'}).then(function(response){
              callback(response.data);
          });
                
               
                
        }
       }
    }
])