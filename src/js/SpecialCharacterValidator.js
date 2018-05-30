
//extended class is same as class but you can overrule methods + functions besides constructor=

class SpecialCharacterValidator extends Validator {

    constructor(selector){
        super(selector); // call constructor in Validator()
        console.log(`constructor from DisallowedCharacterValidator`)
        // console.log(`characters: `, characterArray);
        // console.log(`this.characters: `, this.characterArray)

    }

    //RULES FOR EMAIL ONLY
    validate(){
        super.validate();

        if(this.$field.value.includes(`!`)){
            this.errors.push(`Remove the ! from your password!`);
        }
        if(this.$field.value.includes(`@`)){
            this.errors.push(`Remove the @ from your password!`);
        }
        if(this.$field.value.includes(`#`)){
            this.errors.push(`Remove the # from your password!`);
        }
        if(this.$field.value.includes(`$`)){
            this.errors.push(`Remove the $ from your password!`);
        }
        if(this.$field.value.includes(`%`)){
            this.errors.push(`Remove the % from your password!`);
        }
        if(this.$field.value.includes(`^`)){
            this.errors.push(`Remove the ^ from your password!`);
        }
        if(this.$field.value.includes(`&`)){
            this.errors.push(`Remove the & from your password!`);
        }
        if(this.$field.value.includes(`*`)){
            this.errors.push(`Remove the * from your password!`);
        }


        
    }

}