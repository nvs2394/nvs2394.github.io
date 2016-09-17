var topMember = angular.module("component");

topMember.directive("topMember", function(){
  return {
        restrict: "E",
        templateUrl: "app/components/top-member/template.html",
        controller: "topMemberController"
    };
});

topMember.controller("topMemberController", function($scope, userService) {
  $scope.initData = function(){
    getTopMembers();
  };

  getTopMembers = function() {
    userService.getAll(function(response) {
      if(response.status == 200) {
        $scope.members = response.data.data;
      } else {

      }
    });
  };
});
