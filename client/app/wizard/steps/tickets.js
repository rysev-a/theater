import angular from 'angular';


class TicketsController {
  constructor(Wizard, $scope, $http) {
    this.init(Wizard, $scope, $http);
  }
  
  init (Wizard, $scope, $http) {
    this.$http = $http;
    this.tickets = Wizard.get('tickets');


    $scope.$watch('$ctrl.tickets', ()=> (
      Wizard.set('tickets', this.tickets)
    ), true);
  }

  add () {
    this.tickets.push({});
  }

  remove (index) {
    this.tickets.splice(index, 1);
  }

  submit () {
    let postData = Wizard.format();

    this.$http.post('/api/orders/', 
      JSON.stringify(postData),
      {headers: {'X-CSRFToken': $.cookie('csrftoken')}}
    ).then(function (response) {
        console.log('cool');
        //window.location = 'https://kassa.yandex.ru/';
      }, function (response) {
        alert('Что-то пошло не так, проверьте введенные данные');
      });
  }
}

TicketsController.$inject = ['$scope', 'Wizard'];
angular.
  module('wizard.tickets', []).
  component('tickets', {
    templateUrl: 'templates/tickets.html',
    controller: ['Wizard', '$scope', '$http',
      TicketsController]
  });

