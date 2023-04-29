import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PostcodeInputPageComponent} from "./postcode-input-page/postcode-input-page.component";
import {LandingPageComponent} from "./landing-page/landing-page.component";
import {RegistrationPageComponent} from "./registration-page/registration-page.component";

const routes: Routes = [

  {path: 'get-started', component: PostcodeInputPageComponent},
  {path: 'register', component: RegistrationPageComponent},
  {path: '', component: LandingPageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
