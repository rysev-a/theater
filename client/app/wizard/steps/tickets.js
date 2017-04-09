import angular from 'angular';
import 'angular-cookies';
import {check} from '../helpers';


class TicketsController {
  constructor(Wizard, $scope, $http, $cookies) {
    this.init(Wizard, $scope, $http, $cookies);
  }
  
  init (Wizard, $scope, $http, $cookies) {
    this.$http = $http;
    this.$cookies = $cookies;
    this.Wizard = Wizard;
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

  me () {
    let {first_name, last_name, birth_day} = this.Wizard.get('customer');
    this.tickets.push({first_name, last_name, birth_day});
  }

  check () {
    return this.tickets.reduce((prev, next) => (
      prev && check(next, [
        'first_name',
        'last_name',
        'birth_day'
      ])
    ), true);
  }

  submit () {
    let postData = this.Wizard.format();

    this.$http.post('/api/orders/', 
      JSON.stringify(postData),
      {headers: {'X-CSRFToken': this.$cookies.get('csrftoken')}}
    ).then(function (response) {
        window.location = 'https://kassa.yandex.ru/';
      }, function (response) {
        alert('Что-то пошло не так, проверьте введенные данные');
      });
  }
}

TicketsController.$inject = ['$scope', 'Wizard'];
angular.
  module('wizard.tickets', ['ngCookies']).
  component('tickets', {
    templateUrl: 'templates/tickets.html',
    controller: ['Wizard', '$scope', '$http', '$cookies',
      TicketsController]
  });

