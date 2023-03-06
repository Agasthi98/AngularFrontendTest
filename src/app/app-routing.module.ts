import { UserProfileComponent } from './Components/user-profile/user-profile.component';
import { DhammaSchoolComponent } from './Components/dhamma-school/dhamma-school.component';
import { PoojaComponent } from './Components/pooja/pooja.component';
import { DanaComponent } from './Components/dana/dana.component';
import { HomeComponent } from './Components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'dana', component: DanaComponent },
  { path: 'pooja', component: PoojaComponent },
  { path: 'Dhamma-school', component: DhammaSchoolComponent },
  { path: 'user-profile', component: UserProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
