import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgmCoreModule } from '@agm/core';

import { LocationRoutingModule } from "./location-routing.module";
import { MapViewComponent } from './components/map-view/map-view.component';
import { LocationComponent } from './components/location/location.component';

@NgModule({
  declarations: [ MapViewComponent, LocationComponent],
  imports: [
    CommonModule,
    LocationRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBmDafaqWAd2cpRly6VQ_bFmqZDhOzHOGU'
    })
  ]
})
export class LocationModule { }
