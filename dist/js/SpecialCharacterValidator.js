'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//extended class is same as class but you can overrule methods + functions besides constructor=

var SpecialCharacterValidator = function (_Validator) {
    _inherits(SpecialCharacterValidator, _Validator);

    function SpecialCharacterValidator(selector) {
        _classCallCheck(this, SpecialCharacterValidator);

        // call constructor in Validator()
        var _this = _possibleConstructorReturn(this, (SpecialCharacterValidator.__proto__ || Object.getPrototypeOf(SpecialCharacterValidator)).call(this, selector));

        console.log('constructor from SpecialCharacterValidator');
        // console.log(`characters: `, characterArray);
        // console.log(`this.characters: `, this.characterArray)

        return _this;
    }

    //RULES FOR EMAIL ONLY


    _createClass(SpecialCharacterValidator, [{
        key: 'validate',
        value: function validate() {
            _get(SpecialCharacterValidator.prototype.__proto__ || Object.getPrototypeOf(SpecialCharacterValidator.prototype), 'validate', this).call(this);

            var sclChara = ['!', '@', '#', '$', '%', '^', '&', '*'];
            console.log('this.$field.value: ', this.$field.value);

            for (var i = 0; i != sclChara.length; i++) {
                // var sclChara = sclChara[i];
                if (this.$field.value.indexOf(sclChara[i]) != -1) {
                    this.errors.push('Your password has at least one special character!');
                }
            }

            // if(this.$field.value.includes(`!`)){
            //     this.errors.push(`Remove the ! from your password!`);
            // }
            // if(this.$field.value.includes(`@`)){
            //     this.errors.push(`Remove the @ from your password!`);
            // }
            // if(this.$field.value.includes(`#`)){
            //     this.errors.push(`Remove the # from your password!`);
            // }
            // if(this.$field.value.includes(`$`)){
            //     this.errors.push(`Remove the $ from your password!`);
            // }
            // if(this.$field.value.includes(`%`)){
            //     this.errors.push(`Remove the % from your password!`);
            // }
            // if(this.$field.value.includes(`^`)){
            //     this.errors.push(`Remove the ^ from your password!`);
            // }
            // if(this.$field.value.includes(`&`)){
            //     this.errors.push(`Remove the & from your password!`);
            // }
            // if(this.$field.value.includes(`*`)){
            //     this.errors.push(`Remove the * from your password!`);
            // }

        }
    }]);

    return SpecialCharacterValidator;
}(Validator);
//# sourceMappingURL=SpecialCharacterValidator.js.map
