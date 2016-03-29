angular.module('LeHoiViet.Common')
	.service('LoginService',
		function($http, EndPointConfigService, CURRENT_BACKEND, $location){
			var service = this, 
			MODEL = 'users/login';
			

			service.saveUserAndProfile = function(profile, token){

			};

			service.login = function(email, password, callback){
				var userLogin = {};
				userLogin.email = email;
				userLogin.password = password;
				$http({
				  method: "POST",
				  cache: true,
				  url: EndPointConfigService.getUrl(MODEL),
				 withCredentials : true,
				  data: userLogin
				}).then(function successCallback(response) {
					callback(response);
					
				  }, function errorCallback(response) {
				  	callback(response);
				  });
			};
		});