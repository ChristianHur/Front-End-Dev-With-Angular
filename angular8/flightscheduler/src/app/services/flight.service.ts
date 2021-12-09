import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, Observer } from "rxjs";
import { Flight } from "../models/flight";
import { api } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class FlightService {

  constructor(private http: HttpClient) { }

  //GET A SINGLE FLIGHT
  getFlight(id: number): Observable<any>{
    return this.http.get(api + id);
  }

  //GET All Flights
  getAllFlights(): Observable<any>{
    return this.http.get(api)
  }

  //POST - Add a new flight
  flightCreate(flight: Flight): Observable<object>{
    return this.http.post(api,flight);
  }

  //PUT - Update
  updateFlight(id: number, payload: any): Observable<object>{
    return this.http.put(api + id, payload);
  }

  //DELETE A FLIGHT
  deleteFlight(id: number): Observable<any>{
    return this.http.delete(api + id);
  }

  //DELETE ALL FLIGHTS
  deleteAllFlights(): Observable<any>{
    return this.http.delete(api);
  }

}
