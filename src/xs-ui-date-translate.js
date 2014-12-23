(function (window, angular) { 'use strict';

  angular
    .module('xs.ui.date.translate', [])
    .directive( 'xsDateTranslate', function (dateFilter) {
      return {
        restrict: 'A',
        require: 'ngModel',
        template: '<input type="date" />',
        replace: true,
        link: link
      };
      function link(scope, elm, attrs, ngModel) {
        function toView(modelValue) {
          try {
            return dateFilter(modelValue, 'yyyy-MM-dd');
          } catch(e){}
        }
        ngModel.$formatters.unshift( toView );

        function toModel(viewValue) {
          try {
            return new Date(viewValue).toISOString();
          } catch(e){}
        }
        ngModel.$parsers.unshift( toModel );
      }
    });

})(window, window.angular);
