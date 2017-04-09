import angular from 'angular';


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
      }
    ]
  });
