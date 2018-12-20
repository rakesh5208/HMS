import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HospitalViewComponent } from './hospital-view/hospital-view.component';
import { DepartmentViewComponent } from './department-view/department-view.component';


const routes: Routes = [
  { path: '', redirectTo: '/hospitals', pathMatch: 'full' },
  { path: 'hospitals', component: HospitalViewComponent },
  { path: 'departments', component: DepartmentViewComponent },
  { path: '**', redirectTo: '/hospitals', pathMatch: 'full' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
