import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../shared/user/user.service";
import {Pastry, PastryModel} from "../../../shared/user/user.model";

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.scss']
})
export class CatalogueComponent implements OnInit {
  pastry: PastryModel[] =[];

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.userService.getListPastry().subscribe(
      res => {
        this.pastry = res;
      }
    )
  }

}
