import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCommonModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { HomeComponent } from './Components/home/home.component';
import { DanaComponent } from './Components/dana/dana.component';
import { PoojaComponent } from './Components/pooja/pooja.component';
import { DhammaSchoolComponent } from './Components/dhamma-school/dhamma-school.component';
import { UserProfileComponent } from './Components/user-profile/user-profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HotToastModule } from '@ngneat/hot-toast';
import { MatDialogModule } from '@angular/material/dialog';
import { EditEventComponent } from './Components/edit-event/edit-event.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    DanaComponent,
    PoojaComponent,
    DhammaSchoolComponent,
    UserProfileComponent,
    EditEventComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCommonModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDialogModule,
    HotToastModule.forRoot({
      reverseOrder: true,
      dismissible: true,
      autoClose: true,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
