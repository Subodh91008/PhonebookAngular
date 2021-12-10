import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSliderModule } from '@angular/material/slider';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllPhonebookComponent } from './all-phonebook/all-phonebook.component';
import { EditphonebookComponent } from './editphonebook/editphonebook.component';
import { CreatephonebookComponent } from './createphonebook/createphonebook.component';
import { FormsModule } from '@angular/forms';
import{ HttpClientModule} from '@angular/common/http'


@NgModule({
  declarations: [
    AppComponent,
    AllPhonebookComponent,
    EditphonebookComponent,
    CreatephonebookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatSliderModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
