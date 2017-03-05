import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { DonatePageComponent } from './donate-page/donate-page.component';
import { SocialConnectionsPageComponent } from './social-connections-page/social-connections-page.component';
import { EconomicConnectionsPageComponent } from './economic-connections-page/economic-connections-page.component';
import { DonateButtonComponent } from './donate-button/donate-button.component';
import { PersonContactComponent } from './person-contact/person-contact.component';



@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    DonatePageComponent,
    SocialConnectionsPageComponent,
    EconomicConnectionsPageComponent,
    DonateButtonComponent,
    PersonContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    RouterModule.forRoot([
    {
      path: 'home',
      component: HomePageComponent
    },
    {
      path: '',
      redirectTo: '/home',
      pathMatch: 'full'
    },
    {
      path: 'donate',
      component: DonatePageComponent
    },
    {
      path: 'social-connections',
      component: SocialConnectionsPageComponent
    },
    {
      path: 'economic-connections',
      component: EconomicConnectionsPageComponent
    }
])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
