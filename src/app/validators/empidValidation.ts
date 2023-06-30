import { AbstractControl, ValidationErrors } from "@angular/forms";


export class EmpIdValidator{

 public static isEmpIdValid(control : AbstractControl): ValidationErrors | null{

     let val = control.value as string;

   
      if(val){
   
        let  regxp = /^[a-z]\d{3}$/i;

        let isValid = regxp.test(val);
   
        return isValid ? null:{invalidEmpId: 'Emp Id should starts with 1 Aplphabet & ends with 3 numbers.'}
        
      } else 
      { return null
     
      }
          }
     }



    // if(isValid){
    //     return null;
    // }else{
    //     return{
    //         invalidEmpId: 'Emp Id shuls strats with 1 Alphabet & ends with 3 num'
    //     }
    // }