import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CitiesService } from '../cities.service';

@Component({
  selector: 'app-typeahead',
  templateUrl: './typeahead.component.html',
  styleUrls: ['./typeahead.component.scss']
})
export class TypeaheadComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;

  cities: any;
  filteredCities: [];
  wordToMatch: string;

  constructor(private citiesService: CitiesService) { }

  ngOnInit() {    
    this.cities = this.citiesService.getCities().subscribe(responseData => {
      this.cities = responseData;
    });
  }

  findMatches() {
    let wordToMatch = this.nameInputRef.nativeElement.value;
    
    this.filteredCities = this.cities.filter(item => {
      let cityName = item.city.toLowerCase();
      return cityName.startsWith(wordToMatch);
    });
  }

}

