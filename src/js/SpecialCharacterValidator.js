
//extended class is same as class but you can overrule methods + functions besides constructor=

class SpecialCharacterValidator extends Validator {

    constructor(selector){
        super(selector); // call constructor in Validator()
        console.log(`constructor from SpecialCharacterValidator`)
        // console.log(`characters: `, characterArray);
        // console.log(`this.characters: `, this.characterArray)

    }

    //RULES FOR EMAIL ONLY
    validate(){
        super.validate();

        let sclChara = ['!','@','#','$','%','^','&','*'];
        console.log(`this.$field.value: `, this.$field.value);

        let sclCharaFound = false;
        for(var i = 0; i != sclChara.length; i++){
            // var sclChara = sclChara[i];
            if((this.$field.value).includes(sclChara[i])){
                sclCharaFound = true;
            } 
        }
        if(!sclCharaFound){
            this.errors.push(`You need at least one special character in your password`);
        }        
    }

}