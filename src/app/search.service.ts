import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  data;
  constructor() { }

  getSearchData() {
    let searchResult = new BehaviorSubject<any>(this.data);
    return searchResult;
  }
}
