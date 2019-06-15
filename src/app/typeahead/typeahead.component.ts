import { Component, OnInit } from '@angular/core';
import { CitiesService } from '../cities.service';

@Component({
  selector: 'app-typeahead',
  templateUrl: './typeahead.component.html',
  styleUrls: ['./typeahead.component.scss']
})
export class TypeaheadComponent implements OnInit {
  cities: any;

  constructor(private citiesService: CitiesService) { }

  ngOnInit() {    
    this.cities = this.citiesService.getCities().subscribe(responseData => {
      this.cities = responseData;
    });
  }

  findMatches() {

  }

}

