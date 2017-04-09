angular.
  module('wizard').
  factory('Wizard', [
    function() {
      var self = this;
      self.data = {
        profile: {
          first_name: 'alex',
          last_name: 'alex',
          birth_day: new Date(),
          phone: '99999'
        },
        calendar: {
          date: new Date()
        },
        guests: [{
          first_name: 'alex',
          last_name: 'alex',
          birth_day: new Date()
        }]
      };

      return {
        set: function (field, value) {
          self.data[field] = angular.copy(value);
        },

        get: function (field) {
          return angular.copy(self.data[field]);
        },

        format: function () {
          var tickets = self.data.guests.map(function(guest) {
            return angular.merge(guest, {date: self.data.calendar.date});
          });

          return {
            client: self.data.profile,
            tickets: tickets
          };
        }
      };
    }
  ]);
