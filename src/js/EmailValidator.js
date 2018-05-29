
//extended class is same as class but you can overrule methods + functions besides constructor=

class EmailValidator extends Validator {

    //IN CASE YOU NEED TO CHANGE SOMETHING IN THE CONSTRUCTOR, USE THIS FORMAT
    constructor(selector){
        super(selector); // call constructor in Validator()
        console.log(`constructor from EmailValidator`)
        //We don't need this constuctor - it doesn't do anything different from
        //the parent class constructor. It's here for illustrative purposes.
    }

    //RULES FOR EMAIL ONLY
    validate(){
        super.validate();

        if(!this.$field.value.includes(`@`)){
            this.errors.push(`Your email address needs an @`);
        }
        if(!this.$field.value.includes(`.`)){
            this.errors.push(`Your email address needs a .`);
        }

    }

}