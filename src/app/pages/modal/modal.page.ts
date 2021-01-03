import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalInfoPage } from '../modal-info/modal-info.page';

@Component({
  selector: "app-modal",
  templateUrl: "./modal.page.html",
  styleUrls: ["./modal.page.scss"],
})
export class ModalPage implements OnInit {
  datos: string;
  constructor(public modalController: ModalController) {}

  ngOnInit() {}

  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalInfoPage,
      componentProps:{
        nombre: 'leydy',
        pais: 'colombia'
      },
      cssClass: "my-custom-class",
      swipeToClose: true
    });
    await modal.present();
    modal.onDidDismiss().then(datos => {
      if(datos.data){
        this.datos = datos.data.nombre+' '+datos.data.pais
      }else{
        this.datos = '';
      }
    })
  }
}
