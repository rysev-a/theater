import angular from 'angular';

angular.
  module('wizard.tickets', []).
  component('tickets', {
    templateUrl: 'templates/tickets.html',
    //controller: TicketsController
  });


class TicketsController {
  constructor($scope, Wizard) {
    this.init($scope, Wizard);
  }
  
  init ($scope, Wizard) {
    this.tickets = Wizard.get('tickets');

    $scope.$watch('$ctrl.guestsData', function() {
      Wizard.set('guests', self.guestsData);
    }, true);
  }

}

TicketsController.$inject = ['$scope', 'Wizard'];


// ['Wizard', '$scope', '$http',
//       function GuestsController(Wizard, $scope, $http) {
//         var self = this;
        
//         self.guestsData = Wizard.get('guests');

//         $scope.$watch('$ctrl.guestsData', function() {
//           Wizard.set('guests', self.guestsData);
//         }, true);

//         self.addGuest = function() {
//           self.guestsData.push({});
//         };

//         self.removeGuest = function(index) {
//           self.guestsData.splice(index, 1);
//         };

//         self.submit = function() {
//           var postData = Wizard.format();

//           $http.post('/api/orders/', 
//             JSON.stringify(postData),
//             {headers: {'X-CSRFToken': $.cookie('csrftoken')}}
//           ).then(function (response) {
//               window.location = 'https://kassa.yandex.ru/';
//             }, function (response) {
//               alert('Что-то пошло не так, проверьте введенные данные');
//             });
//         }
//       }
//     ]
