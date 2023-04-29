import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { PostcodeInputPageComponent } from './postcode-input-page/postcode-input-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RegistrationPageComponent } from './registration-page/registration-page.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'get-started', component: PostcodeInputPageComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    PostcodeInputPageComponent,
    LandingPageComponent,
    RegistrationPageComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        RouterModule.forRoot(routes),
        FormsModule,
        BrowserAnimationsModule,
        HttpClientModule,
        ReactiveFormsModule
    ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {



}
