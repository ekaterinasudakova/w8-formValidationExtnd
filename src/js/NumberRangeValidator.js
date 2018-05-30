
//extended class is same as class but you can overrule methods + functions besides constructor=

class NumberRangeValidator extends Validator {

    constructor(selector, min, max){
        super(selector); // call constructor in Validator()
        console.log(`constructor from NumberRangeValidator`)
        this.min = min;
        this.max = max;
    }

    //RULES FOR EMAIL ONLY
    validate(){
        super.validate();

        let numeric = parseFloat(this.$field.value);

        if (isNaN(numeric)){
            this.errors.push(`Must be a number`);
        }

        if (numeric > this.max){
            this.errors.push(`Number must not be greater than` + this.max);
        }
        if (numeric < this.min){
            this.errors.push(`Number must not be less than ${this.min}`);
        }
    }

}