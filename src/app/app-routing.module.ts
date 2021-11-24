import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { MenuComponent } from './menu/menu.component';
import { ReimburstmentComponent } from './reimburstment/reimburstment.component';
import { AdminGuard } from './users/admin.guard';
import { LoginComponent } from './users/login/login.component';
import { LogoutComponent } from './users/logout/logout.component';

const routes: Routes = [
  { path:'login', component: LoginComponent},
  { path:'logout', component: LogoutComponent},
  { path:'menu', component: MenuComponent, canActivate: [AdminGuard] },
  { path:'reimburstment', component: ReimburstmentComponent, canActivate: [AdminGuard] },
  { path:'employee-info', component: EmployeeComponent, canActivate: [AdminGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
