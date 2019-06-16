import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CitiesService } from '../cities.service';

@Component({
  selector: 'app-typeahead',
  templateUrl: './typeahead.component.html',
  styleUrls: ['./typeahead.component.scss']
})
export class TypeaheadComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;

  cities: any = [];
  wordToMatch: string;

  constructor(private citiesService: CitiesService) { }

  ngOnInit() {}

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

