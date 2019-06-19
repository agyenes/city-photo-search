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
  error: boolean = false;

  constructor(private citiesService: CitiesService) { }

  resetForm() {
    this.cities = [];
    this.nameInput = '';
  }

  clearSelectedCity() {
    this.selectedCity = '';
    this.resetForm();
  }

  selectCity(item) {
    this.selectedCity = item;
  }

  findMatches() {
    let wordToMatch = this.nameInput;

    if (wordToMatch === '') {
      this.cities = [];
    } else {
      this.citiesService.getCities(wordToMatch).subscribe(
        responseData => {
          this.cities = responseData;
        },
        err => {
          console.log(err);
          this.error = true;
        })  
    }
  }

  openImageSearch(name) {
    window.open('https://www.google.com/search?tbm=isch&q=' + name, '_blank');
  }
}

