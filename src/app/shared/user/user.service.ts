import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {PastryModel} from "./user.model";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = "http://localhost:8002/pastry/";

  constructor(private http: HttpClient) { }

  getListPastry() {
    return this.http.get<PastryModel[]>(this.url);
  }
}
