import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomRegex } from './const/validations';
import { countryList } from './const/countrydata';
import { EmpIdValidator } from './validators/empidValidation';
import { noSpaceBarValidator } from './validators/noSpaceBarValidator';
import { ForbiddenNameValidator } from './validators/forbiddenName';
import { AsyncEmailValidator } from './validators/asyncEmailValidators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'ReactiveForms';
   signupForm !: FormGroup ;
   gendersArray : Array<string> = ["Female", "male", "others"];
   countriesArray = countryList;

    flag : boolean =false;

    hide = true;
    hide1 = true;


  ngOnInit(): void {
  
   this.createSignUpForm();
   this.f['Password']
    .valueChanges
    .subscribe((res : any) => {
     // console.log(res)
  
    if(this.f['Password'].valid){
      this.f['confirmPassword'].enable()
    }else{
      this.f['confirmPassword'].disable()
    }
  })

  }

  
  

  createSignUpForm(){
    
    this.signupForm = new FormGroup({

userName : new FormControl(null,
  [Validators.required, Validators.maxLength(12), Validators.minLength(4), noSpaceBarValidator.noSpace]),
  empId: new FormControl(null, [Validators.required,EmpIdValidator.isEmpIdValid]),
   skills: new FormArray([new FormControl(null)]),

  gender : new FormControl(null),
email : new FormControl(null, [Validators.required , Validators.pattern(CustomRegex.email), 
  ForbiddenNameValidator.forbiddenName], [AsyncEmailValidator.isEmailUsed]),
Password :  new FormControl(null , [Validators.required, Validators.pattern(CustomRegex.password)]),
confirmPassword :  new FormControl({value : null , disabled: true}),

currentAddress: new FormGroup(
  {
 address: new FormControl(null,[Validators.required]),
 country: new FormControl(null,[Validators.required]),
 state: new FormControl(null,[Validators.required]),
  city: new FormControl(null,[Validators.required]),
  zipcode: new FormControl(null,[Validators.required]),
}),

permanantAddress: new FormGroup({
    address: new FormControl(null),
    country: new FormControl(null),
    state: new FormControl(null),
     city: new FormControl(null),
     zipcode: new FormControl(null),
  
})

})
  }


onSignUp(){

  if(this.f['Password'].value === this.f['confirmPassword'].value && this.signupForm.valid ){
  console.log(this.signupForm.value);
  console.log(this.signupForm);
}
}

 get f(){

  return this.signupForm.controls
 }


 get  getUsernameControl(){
    return this.signupForm.get('userName') as FormControl
  }


 get skillsFormArray(){
  return this.signupForm.get('skills') as FormArray
 }


 addMoreSkills(){

  if (this.skillsFormArray.length < 5){
   let skillsControl = new FormControl(null);
   this.skillsFormArray.push(skillsControl)
  }
 }

 OnDeleteControl(i: number) {
  this.skillsFormArray.removeAt(i)
 }



 onSameAddress(){
  this.flag = !this.flag
  console.log("click");
    if (this.flag) {
      this.f['permanantAddress'].patchValue(this.f['currentAddress'].value)
      this.f['permanantAddress'].disable()
    }else{
      this.f['permanantAddress'].reset()
      this.f['permanantAddress'].enable()
    }

 }


}
