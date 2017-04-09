export default () => {
  let data = {
    customer: {},
    calendar: {},
    tickets: [{}]
  };

  return {
    set: (field, value) => {
      data[field] = angular.copy(value);
    },

    get: (field) => (angular.copy(data[field])),

    format: () => {
      let tickets = data.tickets.map(function(ticket) {
        return angular.merge(ticket, {date: data.calendar.date});
      });
      
      return {
        customer: data.customer,
        tickets: tickets
      };
    }
  };
}

