import angular from 'angular';
import {check} from '../helpers';


angular.
  module('wizard.calendar', []).
  component('calendar', {
    templateUrl: 'templates/calendar.html',
    controller: ['Wizard', '$scope',
      function CalendarController(Wizard, $scope) {       
        this.calendar = Wizard.get('calendar');
        $scope.$watch('$ctrl.calendar', ()=> (
          Wizard.set('calendar', this.calendar)
        ), true);

        this.check = ()=> (check(this.calendar, ['date']));
      }
    ]
  });
