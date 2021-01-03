import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { componente } from 'src/app/interfaces/interfaces';

@Component({
  selector: "app-inicio",
  templateUrl: "./inicio.page.html",
  styleUrls: ["./inicio.page.scss"],
})
export class InicioPage implements OnInit {
  constructor() {
  }

  componentes: componente[] = [];

 /*  toggleMenu(){
    this.menuController.toggle();
  } */

  ngOnInit() {}
}


