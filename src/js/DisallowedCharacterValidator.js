
//extended class is same as class but you can overrule methods + functions besides constructor=

class DisallowedCharacterValidator extends Validator {

    constructor(selector, characterArray){
        super(selector); // call constructor in Validator()
        console.log(`constructor from DisallowedCharacterValidator`)
        this.characterArray = characterArray;
        // console.log(`characters: `, characterArray);
        // console.log(`this.characters: `, this.characterArray)

    }

    //RULES FOR EMAIL ONLY
    validate(){
        super.validate();

        for(var i=0; i < this.characterArray.length; i++){
            // console.log(this.characterArray[i]);
            let character = this.characterArray[i];
            // console.log(character);
            if(this.$field.value.includes(character)){
                console.log(character)
                this.errors.push(`Remove disallowed character(s) from your password`);
            }
        }
        
    }

}