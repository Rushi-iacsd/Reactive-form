import { AbstractControl, ValidationErrors } from "@angular/forms";
import { Observable } from "rxjs";


export class AsyncEmailValidator{

    public static isEmailUsed(control : AbstractControl) : Promise<ValidationErrors | null> |Observable<ValidationErrors | null> {

        let val = control.value as string;

        const promise = new Promise<ValidationErrors | null>((resolve,reject) => {

            setTimeout(() => {
                if(val === "jhon@gmail.com"){
                    resolve({
                      emailExistError : 'This Email is Already Exist.'
                    })
                }else{
                    resolve(null)
                }
            },3000) 
        })
        return promise;
    }  

    }

