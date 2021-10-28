import { Component, OnInit } from '@angular/core';
import { apiService } from '../../services/api.service';
import { Country } from 'src/app/model/Code';
import { Input } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';



@Component({
  selector: 'app-api-form',
  templateUrl: './api-form.component.html',
  styleUrls: ['./api-form.component.css']
})
export class ApiFormComponent implements OnInit {

  constructor(private api_service : apiService){

  }

  listCodesCountries:Country[];

    
  onSubmit(data){
console.warn(data)
  }


  ngOnInit() {
   this.getCodes()
  }


  getCodes(){
    this.api_service.getCodeByCountry().subscribe(
      data => {
          this.listCodesCountries = data;    
      },
      err => console.error(err), 
      () => console.log(this.listCodesCountries)
  );
  }


  
  

}
