import { HttpClient , HttpHeaders , HttpErrorResponse, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { Country } from "../model/Code";
import { CountryApiResponce } from "../model/Phone";
import { catchError,retry } from 'rxjs/operators';
import { formValidationResponse } from "../model/formValidationResponse.model";
import {environment} from '../../environments/environment';


@Injectable({
    providedIn: 'root',
  })
  
export class apiService{
    
    

    constructor(private httpClient : HttpClient) {
        
    }
    
        //Returns list of Alpha2Code of 232 countries : 
        getCountryList() {
          return this.httpClient.get<CountryApiResponce>(
            `${environment.phoneValidationApi}/countries`,
            {params: {access_key: environment.access_key}});
        }
        
        //Validates phone number and alpha2code
        validateNumber(number: string, countryCode: string){
            return this.httpClient.get<formValidationResponse>(
              `${environment.phoneValidationApi}/validate`,
              {params: {access_key: environment.access_key, number, country_code: countryCode}});
          }
           
}
    


