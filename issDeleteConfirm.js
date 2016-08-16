angular.module('my.module').directive('inlineConfirm', function(){
		return {
			restrict: 'E',
			scope: {
				ifConfirmed : '&',
				ifReverted: '&',
				disableIf : '@',
				inputText: '='
			},
			templateUrl: "inlineConfirm.tpl.html",
			link : function ($scope, $element, $attr) {
				$scope.confirming = false;
				$scope.attr = $attr;

				$scope.transition = function confirmDelete(){
					$scope.confirming = true;
				};

				$scope.confirmed = function(action){
					if (action === true){
						$scope.ifConfirmed();
					} else {
						$scope.ifReverted();
					}
					
					$scope.confirming = false;
				};
			}
		};
	});