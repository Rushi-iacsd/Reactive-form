import { AbstractControl, ValidationErrors } from "@angular/forms";


export class noSpaceBarValidator{

  static  noSpace(control: AbstractControl): ValidationErrors | null{
       let val = control.value as string;

        if(!val){
            return null;
        }


        if(val.includes(" ")){
            return{
                noSpaceError: "Space is not allowed !"
            }
        } else{
            return null;
        }
    }
}