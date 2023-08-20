import { Component, OnInit } from '@angular/core';
import {ManagerService} from "../services/manager.service";

@Component({
  selector: 'app-catalogue-manager',
  templateUrl: './catalogue-manager.component.html',
  styleUrls: ['./catalogue-manager.component.scss']
})
export class CatalogueManagerComponent implements OnInit {

  constructor(
    private managerService: ManagerService
  ) { }

  ngOnInit(): void {
    this.managerService.getListCatalogue().subscribe(
      res => {
        console.log(res)
      }
    )
  }

}
