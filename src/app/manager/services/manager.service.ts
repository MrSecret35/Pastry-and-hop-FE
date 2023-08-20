import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ManagerService {
  private url = "http://localhost:8002/catalogue/";

  constructor(private http: HttpClient) {
    //this.url = environment.url_server;
  }


  getListCatalogue() {
    return this.http.get(this.url);
  }
}
