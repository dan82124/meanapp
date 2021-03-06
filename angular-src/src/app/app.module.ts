import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { InventoryComponent } from './components/inventory/inventory.component';
import { RentalComponent } from './components/rental/rental.component';
import { CustomerComponent } from './components/customer/customer.component';
import { SalesComponent } from './components/sales/sales.component';
import { CheckoutComponent } from './components/checkout/checkout.component';

import { CustomerService } from './services/customer.service';
import { RentalService } from './services/rental.service';
import { BikeService } from './services/bike.service';
import { ValidateService } from './services/validate.service';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { BikeFilterPipe } from './shared/bikefilter.pipe';
import { CustomerFilterPipe } from './shared/customerfilter.pipe';

const appRoutes: Routes = [
  {path:'', component: HomeComponent},
  {path:'register', component: RegisterComponent},
  {path:'login', component: LoginComponent},
  {path:'profile', component: ProfileComponent, canActivate:[AuthGuard]},
  {path:'dashboard', component: DashboardComponent, canActivate:[AuthGuard]},
  {path:'inventory', component: InventoryComponent, canActivate:[AuthGuard]},
  {path:'rental', component: RentalComponent, canActivate:[AuthGuard]},
  {path:'customer', component: CustomerComponent, canActivate:[AuthGuard]},
  {path:'sales', component: SalesComponent, canActivate:[AuthGuard]},
  {path:'checkout', component: CheckoutComponent, canActivate:[AuthGuard]}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DashboardComponent,
    ProfileComponent,
    InventoryComponent,
    BikeFilterPipe,
    CustomerFilterPipe,
    RentalComponent,
    CustomerComponent,
    SalesComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule,
    BrowserAnimationsModule
  ],
  providers: [
    ValidateService,
    AuthService,
    AuthGuard,
    BikeService,
    RentalService,
    CustomerService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
