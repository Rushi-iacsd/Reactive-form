import { AbstractControl, ValidationErrors } from "@angular/forms";



export class ForbiddenNameValidator{
 
 public   static forbiddenName(control : AbstractControl): ValidationErrors | null {

            let val = control.value as string;

            if(!val){
                return null
            }

          
            if(val.toLowerCase().trim().includes('admin'))
            {
              return{
                forbiddenError : "admin name is not allowed in email"
              }
            }else{
                return null;
             }
            }    
        }
         
