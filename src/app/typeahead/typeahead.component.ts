import { Component } from '@angular/core';
import { CitiesService } from '../cities.service';

@Component({
  selector: 'app-typeahead',
  templateUrl: './typeahead.component.html',
  styleUrls: ['./typeahead.component.scss']
})
export class TypeaheadComponent {
  cities: any = [];
  wordToMatch: string;
  selectedCity: string = '';
  nameInput: string = '';

  constructor(private citiesService: CitiesService) { }

  resetForm() {
    this.cities = [];
    this.nameInput = '';
  }

  selectCity(item) {
    this.selectedCity = item;
    this.resetForm();
  }

  clearSelectedCity() {
    this.selectedCity = '';
  }

  findMatches() {
    let wordToMatch = this.nameInput;

    if (wordToMatch === '') {
      this.cities = [];
    } else {
      this.citiesService.getCities(wordToMatch).subscribe(responseData => {
        this.cities = responseData;
      });    
    }
  }

  openImageSearch(name) {
    window.open('https://www.google.com/search?tbm=isch&q=' + name, '_blank');
  }
}

