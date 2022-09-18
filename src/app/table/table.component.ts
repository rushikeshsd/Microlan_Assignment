import { Component, EventEmitter, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { User } from "../user.model";
import { ApiService } from '../api.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, OnChanges {
  public tableData: User[] = [];
  public orignalData = [];
  public DataFiltered = [];
  @Input() searchString: any;

  constructor(public api: ApiService) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.searchString) {
      if (this.searchString.reset) {
        this.tableData = this.orignalData;
      } else {
        this.filterData();
      }
    }
  }

  ngOnInit(): void {
    this.getApiData();
  }

  getApiData() {
    this.api.getTableData().subscribe((response: any) => {
      if (response && response.data) {
        response.data.map(ele => {
          this.tableData.push(new User(ele));
        });
      }
    })
    this.orignalData = this.tableData;
  }

  // Filter the data as per user input
  filterData() {
    let searchQuery = this.searchString.value.toLowerCase();
    this.tableData = this.tableData.filter(ele => {
      if (ele.email.toLowerCase().includes(searchQuery)
        || ele.firstName.toLowerCase().includes(searchQuery)
        || ele.image.toLowerCase().includes(searchQuery)
        || ele.lastName.toLowerCase().includes(searchQuery)
        || ele.userName.toLowerCase().includes(searchQuery)
        || ele.website.toLowerCase().includes(searchQuery)) {
        return ele;
      }
    });
    this.DataFiltered = this.tableData;
  }

  //Open Modal on button click
  openModal() {

    this.filterData();
    document.getElementById('button'); {
      document.querySelector<HTMLElement>('.bg-modal').style.display = 'flex'
    }
    document.querySelector('.close').addEventListener('click', function () {
      document.querySelector<HTMLElement>('.bg-modal').style.display = 'none';
    })
  }
}
