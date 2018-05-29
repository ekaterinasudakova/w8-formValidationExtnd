var validatorFirst = new Validator('[name=first-name]');
var validatorLast = new Validator('[name=last-name]');
var validatorEmail = new EmailValidator('[name=email]');

var validatorNumbRange =[ 
    new NumberRangeValidator('[name=month]', 01, 12);
    new NumberRangeValidator('[name=year]', 1980, 2000);
var MatchValidator = new MatchValidator('[name=password-renter]','[name=password]');
var LengthhValidator = new LengthValidator('[name=password-renter]', 6, 24);
var DisallowedCharacterValidator = new DisallowedCharacterValidator('[name = password]', ["+", "-", "&&", "||", "!", "(", ")", "{", "}", "[", "]", "^",
"~", "*", "?", ":"]);
var specialCharacterValidator = new specialCharacterValidator('[name=password]');
var upperLowerValidator = new upperLowerValidator('[name=password]');