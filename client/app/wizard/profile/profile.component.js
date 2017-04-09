angular.
  module('wizard.profile').
  component('profile', {
    templateUrl: 'wizard/profile/profile.template.html',
    controller: ['Wizard', '$scope',
      function ProfileController(Wizard, $scope) {
        var self = this;
        self.profileData = Wizard.get('profile');
        $scope.$watch('$ctrl.profileData', function() {
          Wizard.set('profile', self.profileData);
        }, true);
      }
    ]
  });
