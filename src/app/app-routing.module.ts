import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { ProfileComponent } from './modules/profile/profile.component';
import { PreviewComponent } from './modules/preview/preview.component';

const routes: Routes = [
  {
    path: '',
    component:HomeComponent,
    pathMatch: 'full'
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
