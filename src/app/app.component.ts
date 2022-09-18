import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  searchString: string

  constructor() { }

  searchFilter(event) {
    this.searchString = event;
  }
}
