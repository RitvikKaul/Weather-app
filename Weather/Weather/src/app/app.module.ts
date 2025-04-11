import { NgModule, Pipe } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { KelvinToCelsiusPipe } from './pipes/kelvin-to-celsius.pipe';
import { SpeechToTextComponent } from './speech-to-text/speech-to-text.component';

@NgModule({
  declarations: [
    AppComponent,
    KelvinToCelsiusPipe,
    SpeechToTextComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
