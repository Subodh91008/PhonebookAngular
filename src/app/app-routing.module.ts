import { CreatephonebookComponent } from './createphonebook/createphonebook.component';
import { EditphonebookComponent } from './editphonebook/editphonebook.component';
import { AllPhonebookComponent } from './all-phonebook/all-phonebook.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'all',component:AllPhonebookComponent},
  {path:'edit/:id',component:EditphonebookComponent},
  {path:'create',component:CreatephonebookComponent},
  {path: '',   redirectTo: 'all', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
