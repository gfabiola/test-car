import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {  MapViewComponent} from "./components/map-view/map-view.component";
import {  LocationComponent} from "./components/location/location.component";


const routes: Routes = [
  {
    path: '',
    component: LocationComponent,
    children: [
      { path: 'map', component: MapViewComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LocationRoutingModule { }
