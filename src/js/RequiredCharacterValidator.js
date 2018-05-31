
//extended class is same as class but you can overrule methods + functions besides constructor=

class RequiredCharacterValidator extends Validator {

    constructor(selector, requiredCharacters){
        super(selector); // call constructor in Validator()
        console.log(`constructor from RequiredCharacterValidator`)
        // console.log(`characters: `, characterArray);
        // console.log(`this.characters: `, this.characterArray)

        this.requiredCharacters = requiredCharacters;

    }

    //RULES FOR EMAIL ONLY
    validate(){
        super.validate();


        let sclCharaFound = false;
       this.requiredCharacters.forEach((char) => {
           if(this.$field.value.includes(char)){
               sclCharaFound = true;
           }
       })
        if(!sclCharaFound){
            this.errors.push(`This field is missing special characters`);
        }        
    }

}