angular.module('theater', [
  'ngRoute',
  'wizard'
]);

Date.prototype.toJSON = function() {
  return moment(this).format('YYYY-MM-DD');
};
