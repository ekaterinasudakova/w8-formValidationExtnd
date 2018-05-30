
//extended class is same as class but you can overrule methods + functions besides constructor=

class MatchValidator extends Validator {

    constructor(selector, otherSelector){
        super(selector);
        console.log(`constructor from MatchValidator`)

        this.otherSelector = otherSelector;
        // console.log(this);
        // console.log(selector);
        // console.log(otherSelector);
    }

    //RULES FOR EMAIL ONLY
    validate(){
        super.validate();
        // console.log(this.$field.value);

        this.$otherSelector = document.querySelector(this.otherSelector);
        // console.log(this.$otherSelector);
        // console.log(this.$otherSelector.value);

        if(!this.$field.value.match(this.$otherSelector.value)){
            this.errors.push(`Your passwords don't match`);
        }

    }

}