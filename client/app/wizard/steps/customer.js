import angular from 'angular';
import {check} from '../helpers';


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

        this.check = ()=> (check(this.customer, [
          'first_name',
          'last_name',
          'birth_day',
          'phone'
        ]));
      }
    ]
  });

