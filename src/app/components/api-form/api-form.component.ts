import { Component, OnInit, Output } from '@angular/core';
import { apiService } from '../../services/api.service';
import { Country } from 'src/app/model/Code';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { formValidationResponse } from 'src/app/model/formValidationResponse.model';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-api-form',
  templateUrl: './api-form.component.html',
  styleUrls: ['./api-form.component.css']
})
export class ApiFormComponent implements OnInit {



  selectedCountry!: Country;
  number = new FormControl('', [Validators.required]);

  $validationResult!: Observable<formValidationResponse>;




  constructor(private api_service : apiService){
   
  }


CorrectNumber() {
  this.$validationResult = this.api_service.validateNumber(
    this.number.value,
    this.selectedCountry?.countryCode ?? '');
}

  ngOnInit() {
  
  }
  
  otherCountry(country: Country) {
    this.selectedCountry = country;
  }


  
  

}
