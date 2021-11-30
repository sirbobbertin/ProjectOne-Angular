import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { MenuComponent } from './menu/menu.component';
import { ReimburstmentComponent } from './reimburstment/reimburstment.component';
import { AdminGuard } from './users/admin.guard';
import { LoginComponent } from './users/login/login.component';
import { LogoutComponent } from './users/logout/logout.component';
import { ManagerComponent } from './manager/manager.component';
import { EditEmployeeComponent } from './employee/edit-employee/edit-employee.component';
import { ProfileComponent } from './profile/profile.component';
import { ReimburstmentPendingComponent } from './reimburstment_pending/reimburstment-pending.component';
import { ReimburstmentResolvedComponent } from './reimburstment_resolved/reimburstment-resolved.component';

const routes: Routes = [
  { path:'login', component: LoginComponent},
  { path:'logout', component: LogoutComponent},
  { path:'menu', component: MenuComponent, canActivate: [AdminGuard] },
  { path:'reimburstment', component: ReimburstmentComponent, canActivate: [AdminGuard] },
  { path:'reimburstment-pending', component: ReimburstmentPendingComponent, canActivate: [AdminGuard] },
  { path:'reimburstment-resolve', component: ReimburstmentResolvedComponent, canActivate: [AdminGuard] },
  { path:'employee-info', component: ManagerComponent, canActivate: [AdminGuard]},
  { path:'employee-edit/:sentEmployeeId', component: EditEmployeeComponent, canActivate: [AdminGuard]},
  { path: 'employee-profile', component: EmployeeComponent,  canActivate: [AdminGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
