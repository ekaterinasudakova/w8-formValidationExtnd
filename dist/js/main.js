'use strict';

var validatorFirst = new Validator('[name=first-name]');
var validatorLast = new Validator('[name=last-name]');
var validatorEmail = new EmailValidator('[name=email]');

var validatorNumDD = new NumberRangeValidator('[name=day]', 1, 31);
var validatorNumMM = new NumberRangeValidator('[name=month]', 1, 12);
var validatorNumYYYY = new NumberRangeValidator('[name=year]', 1900, new Date().getFullYear());

var validatorPassMatch1 = new MatchValidator('[name=password]', '[name=password2]');
var validatorPassMatch2 = new MatchValidator('[name=password2]', '[name=password]');
//# sourceMappingURL=main.js.map
