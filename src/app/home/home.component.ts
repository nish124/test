import { Component, OnInit } from '@angular/core';
import { CountriesService } from './countries.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  stateInfo: any[] = [];
  countryInfo: any[] = [];
  cityInfo: any[] = [];

  
  constructor(private country:CountriesService) {

   }

  ngOnInit() {
    this.getCountries();
 //   this.onChangeCountry();

}

  getCountries(){
    this.country.allCountries().subscribe(res => {
        this.countryInfo=res.Countries;
      });
  }

  onChangeCountry() {
    this.stateInfo=this.countryInfo[100].States;
    console.log(this.stateInfo);
    
    this.cityInfo=this.stateInfo[0].Cities;
    console.log(this.cityInfo);
  }

  onChangeState(stateValue) {    

    
    this.cityInfo=this.stateInfo[stateValue].Cities;
  }
    

}