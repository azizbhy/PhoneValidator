import { Injectable } from '@angular/core';
import {Country} from '../model/Code';
import {CountryApiResponce} from '../model/Phone';

@Injectable({
  providedIn: 'root'
})
export class UtilitiesService {

  constructor() { }

  mapApiCountryResponse(countries: CountryApiResponce): Country[] {
      let result: Country[] = [];
      Object.keys(countries).forEach(country =>
        result.push(new Country(countries[country].country_name, countries[country].dialling_code, country)))
      return result;
  }
}
