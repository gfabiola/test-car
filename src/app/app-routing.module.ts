import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocationModule } from "./location/location.module";

const routes: Routes = [
  {path: 'location', loadChildren: './location/location.module#LocationModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
