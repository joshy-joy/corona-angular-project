import { NgModule } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { CasesComponent } from './cases/cases.component';
import { CasesDetailsComponent } from './cases-details/cases-details.component';
import { AddCasesComponent } from './add-cases/add-cases.component';
import { CasesStatComponent } from './cases-stat/cases-stat.component';
import { EditCasesComponent } from './edit-cases/edit-cases.component';

const routes: Routes = [
  {
    path: 'cases',
    component: CasesComponent,
    data: { title: 'List of Cases'} 
  },
  {
    path: 'case-details/:id',
    component: CasesDetailsComponent,
    data: { title: 'Case details'}
  },
  {
    path: 'cases-stat',
    component: CasesStatComponent,
    data: { title: 'Cases Statistic'}
  },
  {
    path: 'add-cases',
    component: AddCasesComponent,
    data: { title: 'Add cases'}
  },
  {
    path: 'edit-cases',
    component: EditCasesComponent,
    data: { title: 'Edit cases'}
  },
  {
    path:'',
    redirectTo: '/cases',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
