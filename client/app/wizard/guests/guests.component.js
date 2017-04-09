angular.
  module('wizard.guests').
  component('guests', {
    templateUrl: 'wizard/guests/guests.template.html',
    controller: ['Wizard', '$scope',
      function GuestsController(Wizard, $scope) {
        var self = this;
        
        self.guestsData = Wizard.get('guests');

        $scope.$watch('$ctrl.guestsData', function() {
          Wizard.set('guests', self.guestsData);
        }, true);

        self.addGuest = function() {
          self.guestsData.push({});
        };

        self.removeGuest = function(index) {
          self.guestsData.splice(index, 1);
        };

        self.submit = function() {
          console.log(Wizard.getJSON());
        }
      }
    ]
  });
