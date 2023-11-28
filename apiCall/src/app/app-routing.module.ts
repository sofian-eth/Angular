import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashoardComponent } from './dashoard/dashoard.component';
import { Dashboard2Component } from './dashboard2/dashboard2.component';

const routes: Routes = [{
  path: '', component: Dashboard2Component
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
