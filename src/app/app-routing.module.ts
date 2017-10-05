import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './views/landing-page/landing-page.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'landing-page', pathMatch: 'full'
  },
  {
    path: 'landing-page', component: LandingPageComponent
  },
  {
    path: '**', redirectTo: 'landing-page', pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
