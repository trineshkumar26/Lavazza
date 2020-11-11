import { Component, OnInit } from '@angular/core';
import { PagerService } from '../services/pager.service';
import { EmployeeService } from '../services/employee.service';
import { IEmployee } from './employee';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {
  constructor(private pagerService: PagerService, private _employeeService:EmployeeService) 
  {

  }
  
headElements = ['Name', 'Company', 'Email', 'Status','Actions'];
rowData:any[];
// array of all items to be paged
private allItems: IEmployee[];

// pager object
pager: any = {};

// paged items
pagedItems: any[];

ngOnInit() {
  // initialize to page 1  
         this._employeeService.getEmployees(). subscribe(data => {this.allItems=data; let x=this.allItems.length;
          this.setPage(1)});
}

setPage(page: number) 
  {
      // get pager object from service
      this.pager = this.pagerService.getPager(this.allItems.length, page);
  
      // get current page of items
     this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }

onSelect(element: any)
{
  this.rowData = element;
  alert('Selected Row Data - ' + JSON.stringify(this.rowData));
}

}



