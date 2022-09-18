import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SearchService } from '../search.service'
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchText: string;
  @Output() onSearch: EventEmitter<any> = new EventEmitter<any>()
  constructor(public search: SearchService) { }

  ngOnInit(): void {
  }

  searchFilter(value) {
    this.searchText = value;
    this.onSearch.emit({ 'value': value, 'reset': value === '' });
  }
}
