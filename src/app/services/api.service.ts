import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Country } from "../model/Code";


@Injectable({
    providedIn: 'root',
  })
  
export class apiService{
    
    private apiCountry = 'https://apilayer.net/api/countries?access_key=eb588dbf70cb81df1c8d374269db9d18';
    private apiPhone = 'https://apilayer.net/api/validate?access_key=eb588dbf70cb81df1c8d374269db9d18'

    constructor(private httpClient : HttpClient) {
        
    }

        getCodeByCountry(){
            return this.httpClient.get<Country[]>(`${this.apiCountry}`);
        }
        

    
}

