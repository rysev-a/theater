angular.
  module('wizard.calendar').
  component('calendar', {
    templateUrl: 'wizard/calendar/calendar.template.html',
    controller: ['Wizard', '$scope',
      function CalendarController(Wizard, $scope) {
        var self = this;
        
        self.calendarData = Wizard.get('calendar');
        $scope.$watch('$ctrl.calendarData', function() {
          Wizard.set('calendar', self.calendarData);
        }, true);
      }
    ]
  });
