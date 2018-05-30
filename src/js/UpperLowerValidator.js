class UpperLowerValidator extends Validator {

    constructor(selector){
        super(selector); // call constructor in Validator()
        console.log(`constructor from UpperLowerValidator`)
    }

    //RULES FOR EMAIL ONLY
    validate(){
        super.validate();

        console.log(this.$field.value);
        let inputValue = this.$field.value;

        let upCharaFound = false;
        for (var i = 0; i < inputValue.length; i++) {
            console.log(`character from input value: `,inputValue.charAt(i));
            let inputCharacters = inputValue.charAt(i);

            if(inputCharacters == inputCharacters.toUpperCase()){
                upCharaFound = true;
                console.log(`we found an uppercase letter!`)
            }
        }
        if(!upCharaFound){
            this.errors.push(`You need at least one uppercase character in your password`);
        }       
    }

}