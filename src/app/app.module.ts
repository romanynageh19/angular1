import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavebarComponent } from './navebar/navebar.component';
import { FooterComponent } from './footer/footer.component';
import { StartComponent } from './start/start.component';
import { AboutComponent } from './about/about.component';
import { ProtfoloComponent } from './protfolo/protfolo.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    NavebarComponent,
    FooterComponent,
    StartComponent,
    AboutComponent,
    ProtfoloComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
