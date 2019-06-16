import { Component, ViewChild, ElementRef } from '@angular/core';
import { CitiesService } from '../cities.service';

@Component({
  selector: 'app-typeahead',
  templateUrl: './typeahead.component.html',
  styleUrls: ['./typeahead.component.scss']
})
export class TypeaheadComponent {
  @ViewChild('nameInput') nameInputRef: ElementRef;

  cities: any = [];
  wordToMatch: string;
  selectedCity: string = '';

  constructor(private citiesService: CitiesService) { }

  resetList(name) {
    this.selectedCity = name;
    this.cities.length = 0;
    this.nameInputRef.nativeElement.value = '';
  }

  findMatches() {
    let wordToMatch = this.nameInputRef.nativeElement.value;
    
    this.citiesService.getCities(wordToMatch).subscribe(responseData => {
      this.cities = responseData;
    });    
  }

  openImageSearch(name) {
    window.open('https://www.google.com/search?tbm=isch&q=' + name, '_blank');
  }
}

