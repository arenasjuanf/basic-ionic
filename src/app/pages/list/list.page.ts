import { Component, OnInit, ViewChild } from '@angular/core';
import { IonList } from '@ionic/angular';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: "app-list",
  templateUrl: "./list.page.html",
  styleUrls: ["./list.page.scss"],
})
export class ListPage implements OnInit {
  public usuarios: Observable<any[]>;
  constructor(private DataService: DataService) {}
  @ViewChild('lista') lista: IonList; 
  ngOnInit() {
    this.usuarios = this.DataService.getUsers();
    //.subscribe((users) => (this.usuarios = users));
  }

  favorite(user) {
    console.log(user);
    this.lista.closeSlidingItems();
  }

  share(user) {
    console.log(user);
  }
}
