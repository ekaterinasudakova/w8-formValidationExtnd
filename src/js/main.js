var validatorFirst = new Validator('[name=first-name]');
var validatorLast = new Validator('[name=last-name]');
var validatorEmail = new EmailValidator('[name=email]');



let validatorNumDD = new NumberRangeValidator('[name=day]', 1, 31);
let validatorNumMM = new NumberRangeValidator('[name=month]', 1, 12);
let validatorNumYYYY = new NumberRangeValidator('[name=year]', 1900, new Date().getFullYear());

let validatorPassMatch1 = new MatchValidator('[name=password]', '[name=password2]');
let validatorPassMatch2 = new MatchValidator('[name=password2]', '[name=password]');

let validatorPassLength = new LengthValidator('[name=password]', 6, 20);

let validatorPassBadChara = new DisallowedCharacterValidator('[name=password]', ['-','+','=','`','~','|','/','>','<']);