
class LengthValidator extends Validator {

    constructor(selector, min, max){
        super(selector); // call constructor in Validator()
        console.log(`constructor from LengthValidator`)
        this.min = min;
        this.max = max;
    }

    //RULES FOR LENGTH ONLY
    validate(){
        super.validate();
        console.log(this.$field.value.length);
        console.log(this.min);
      if(this.$field.value.length < this.min){
        this.errors.push(`Your password is too short!`);
      }
      if(this.$field.value.length > this.max){
        this.errors.push(`Your password is too long!`);
      }
    }

}