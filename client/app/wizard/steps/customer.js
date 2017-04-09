import angular from 'angular';

angular.
  module('wizard.customer', []).
  component('customer', {
    templateUrl: 'templates/customer.html',
    controller: ['Wizard', '$scope',
      function ClientController(Wizard, $scope) {
        this.customer = Wizard.get('customer');
        $scope.$watch('$ctrl.customer', ()=> (
          Wizard.set('customer', this.customer)
        ), true);
      }
    ]
  });
