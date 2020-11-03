import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { GridEmployeesComponent } from './employees/grid-employees.component';

const appRoutes: Routes = [
{path: '', redirectTo: '/grid', pathMatch : 'full'},
{path: 'grid', component: GridEmployeesComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    GridEmployeesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
