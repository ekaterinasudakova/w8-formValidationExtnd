class Validator{
    constructor(selector){

        //find the field, show an error if it's not available
        this.$field = document.querySelector(selector);
        if(!this.$field){
            console.warn(`Couldn't find an element with selector`, selector)
            return false
        }
        // if(this.$field){
        //     this.$blurb = document.querySelector(".error-message");
        //     console.log(`If there is no existing error container..`)
        //     if (!this.$blurb){
        //         console.log(`Let's create one`)
        //         this.$errorContainer = document.createElement('div');
        //         this.$errorContainer.classList.add('error-message');
        //         this.$field.parentElement.appendChild(this.$errorContainer);
        //     }
        // }
        

        //try to find existing error container
        this.$errorContainer = this.$field.parentElement.querySelector('.error-message');
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
        this.$field.addEventListener(`keyup`, this.validate.bind(this))
        this.$field.addEventListener(`blur`, this.validate.bind(this))
    }

    //this is how you make function or method inside a class


    //RULES
    validate(){
        console.log(`validate!!!`,this.$field.value)
        //not selector bc that's just the string w the []

        this.errors = [];
       
        //strings are truthy if they have something in them and falsy if they don't
        //so this validates that it's a string
        if(!this.$field.value){
            //do nothing
            this.errors.push("You must fill out the field");
        }

        //this is a HACK
        //putting it in a 0ms timeout just moves it to the end of the
        //call stack, after any and all parent/child/grandchild
        // of validate
        setTimeout(this.showErrors.bind(this), 0)
    }
    

        //STYLING
    showErrors(){
        this.$errorContainer.innerHTML = "";
        if(this.errors.length){
            this.$field.style.borderColor = `red`;
            
            this.errors.forEach((error)=>{
                this.$errorContainer.innerHTML += '<p>' + error + '</p>';
            }) 
        } else {
            this.$field.style.borderColor = `green`;
        }
    }

}
