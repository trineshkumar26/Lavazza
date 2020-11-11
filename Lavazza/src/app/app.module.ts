import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ListEmployeesComponent } from './employees/list-employees.component';
import {HttpClientModule} from '@angular/common/http';
import {EmployeeService} from './services/employee.service';

const appRoutes: Routes = [
{path: '', redirectTo: '/list', pathMatch : 'full'},
{path: 'list', component: ListEmployeesComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ListEmployeesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
