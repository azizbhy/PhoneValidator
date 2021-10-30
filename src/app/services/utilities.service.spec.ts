import { TestBed } from '@angular/core/testing';

import { UtilitiesService } from './utilities.service';
import {Country} from '../model/Code';

describe('UtilitieService', () => {
  let service: UtilitiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UtilitiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Should have contained in the list this country', () => {
    const countries = {
      "TN": {
        "country_name": "Tunisia",
        "dialling_code": "+216"
      }
    };

    const countryArray = [new Country('Tunisia', '+216', 'TN')]

    
    const result = service.mapApiCountryResponse(countries);
   
    expect(result).toEqual(countryArray);
  });
});