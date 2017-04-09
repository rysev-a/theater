angular.
  module('wizard').
  factory('Wizard', [
    function() {
      var self = this;
      self.data = {
        profile: {},
        calendar: {},
        guests: [{}]
      };

      return {
        set: function (field, value) {
          self.data[field] = angular.copy(value);
        },

        get: function (field) {
          return angular.copy(self.data[field]);
        },

        getJSON: function () {
          return JSON.stringify(self.data);
        }
      };
    }
  ]);
