import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { componente } from 'src/app/interfaces/interfaces';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: "app-menu",
  templateUrl: "./menu.page.html",
  styleUrls: ["./menu.page.scss"],
})
export class MenuPage implements OnInit {
  componentes;

  constructor(private data: DataService, private menu: MenuController, private router: Router) {}

  ngOnInit() {
    this.componentes = this.data.getMenuOpts();
  }

  cerrarMenu(){
    this.menu.toggle();
  }

  goTo(ruta: string){
    this.router.navigateByUrl(ruta).then( () => this.menu.toggle());
  }
}
