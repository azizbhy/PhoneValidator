import {Component,Output, EventEmitter,OnInit} from '@angular/core';
import {apiService} from '../../services/api.service';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {Country} from '../../model/Code';
import {MatSelectChange} from '@angular/material/select';
import {UtilitiesService} from '../../services/utilities.service';
import {MatSelectModule} from '@angular/material/select';



@Component({
  selector: 'app-country-code-list',
  templateUrl: './country-code-list.component.html',
  styleUrls: ['./country-code-list.component.css']
})


export class CountryCodeListComponent implements OnInit {

  

  ngOnInit(): void {

  }

  @Output() countryChange = new EventEmitter<Country>();

  // It's better to subscribe in the template to auto unsubscribe when the component is destroyed.
  $countries: Observable<Country[]>;

  constructor(private api: apiService, private util: UtilitiesService) {
    this.$countries = this.api.getCountryList().pipe(map(util.mapApiCountryResponse));
  }

  selectCountry(selectedCountry: MatSelectChange) {
    this.countryChange.emit(selectedCountry.value);
  }
}
