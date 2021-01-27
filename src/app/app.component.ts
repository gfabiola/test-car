import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Vehicle } from './model/vehicle';
import { VehiclesService } from './services/vehicles.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'test-car';

  $vehiclesObservable: Observable<Vehicle[]> = new Observable();

  constructor(private vehiclesService: VehiclesService){}

  ngOnInit()
  {
    this.$vehiclesObservable = this.vehiclesService.getAll();
  }

  zoom: number = 9;
  
  lat: number = 33.9059657;
  lng: number = -84.3320604;
}
