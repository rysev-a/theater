export default () => {
  let data = {
    customer: {},
    calendar: {},
    guests: [{}]
  };

  return {
    set: (field, value) => {
      data[field] = angular.copy(value);
    },

    get: (field) => (angular.copy(data[field])),

    format: () => {
      let tickets = data.guests.map(function(guest) {
        return angular.merge(guest, {date: data.calendar.date});
      });
      
      return {
        customer: data.customer,
        tickets: tickets
      };
    }
  };
}

