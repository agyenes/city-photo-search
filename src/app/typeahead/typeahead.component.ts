import { Component, OnInit } from '@angular/core';
import { CitiesService } from '../cities.service';

@Component({
  selector: 'app-typeahead',
  templateUrl: './typeahead.component.html',
  styleUrls: ['./typeahead.component.scss']
})
export class TypeaheadComponent implements OnInit {

  constructor(private citiesService: CitiesService) { }

  ngOnInit() {    

  }

  findMatches() {

  }

}

