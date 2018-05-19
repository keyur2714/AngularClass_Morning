import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { MessageComponent } from './message/message-component';
import { CalculationComponent } from './calculation/calculation.component';


@NgModule({
  declarations: [
    AppComponent,
    PersonalDetailsComponent,
    MessageComponent,
    CalculationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
