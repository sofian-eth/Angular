import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateDataComponent } from './create-data/create-data.component';
import { Erc721Component } from './erc721/erc721.component';

const routes: Routes = [{
 path: '', component: CreateDataComponent
},
{path: 'erc721', component: Erc721Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
