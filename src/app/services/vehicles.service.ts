import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Vehicle } from '../model/vehicle';

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {

  endpoint = 'https://6010b44b91905e0017be3851.mockapi.io/v1/vehicles';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Vehicle[]>{
    return this.http.get(this.endpoint).pipe(
      map(response => <Vehicle[]>response)
    );
  }
}
