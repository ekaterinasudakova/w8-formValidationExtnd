'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Validator = function () {
    function Validator(selector) {
        _classCallCheck(this, Validator);

        //find the field, show an error if it's not available
        this.$field = document.querySelector(selector);
        if (!this.$field) {
            console.warn('Couldn\'t find an element with selector', selector);
            return false;
        }

        //make element to show the errors in
        this.$errorContainer = document.createElement('div');
        this.$errorContainer.classList.add('error-message');
        this.$field.parentElement.appendChild(this.$errorContainer);

        //keep track of errors
        this.errors = [];

        //add event listener to call this.validate
        //but overrule its _this_ logic, and force its
        //_this_ to be the Validate class instance

        //this gets redefined every thime you have timeout, addevent, and ajax, foreach
        this.$field.addEventListener('keyup', this.validate.bind(this));
        this.$field.addEventListener('blur', this.validate.bind(this));
    }

    //this is how you make function or method inside a class


    //RULES


    _createClass(Validator, [{
        key: 'validate',
        value: function validate() {
            console.log('validate!!!', this.$field.value);
            //not selector bc that's just the string w the []

            this.errors = [];

            //strings are truthy if they have something in them and falsy if they don't
            //so this validates that it's a string
            if (this.$field.value) {
                //do nothing
            } else {
                this.errors.push("You must fill out the field");
            }

            //this is a HACK
            //putting it in a 0ms timeout just moves it to the end of the
            //call stack, after any and all parent/child/grandchild
            // of validate
            setTimeout(this.showErrors.bind(this), 0);
        }

        //STYLING

    }, {
        key: 'showErrors',
        value: function showErrors() {
            var _this = this;

            if (this.errors.length) {
                this.$field.style.borderColor = 'red';
                this.$errorContainer.innerHTML = "";
                this.errors.forEach(function (error) {
                    _this.$errorContainer.innerHTML += '<p>' + error + '</p>';
                });
            } else {
                this.$field.style.borderColor = 'green';
                this.$errorContainer.innerHTML = "";
            }
        }
    }]);

    return Validator;
}();
//# sourceMappingURL=Validator.js.map
