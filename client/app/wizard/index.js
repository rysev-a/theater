import angular from 'angular';
import Wizard from './service';
import './steps/start';
import './steps/customer';
import './steps/calendar';
import './steps/tickets';


angular.
  module('wizard', [
    'wizard.customer',
    'wizard.start',
    'wizard.calendar',
    'wizard.tickets'
  ]).
  factory('Wizard', [Wizard]);

