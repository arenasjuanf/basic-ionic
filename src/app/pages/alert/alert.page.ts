import { Component, OnDestroy, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: "app-alert",
  templateUrl: "./alert.page.html",
  styleUrls: ["./alert.page.scss"],
})
export class AlertPage implements OnInit, OnDestroy {
  public valor: string;
  constructor(public alertController: AlertController) {}

  ngOnInit() {}

  async presentAlertPrompt() {
    const alert = await this.alertController.create({
      cssClass: "my-custom-class",
      header: "Prompt!",
      inputs: [
        {
          name: "texto",
          type: "text",
          placeholder: "Placeholder 1",
          attributes: { // atrubutos html inputs
            disabled: false
          },
        },
      ],
      buttons: [
        {
          text: "Ok",
          handler: (data) => {
            this.valor = data.texto;
            console.log("Confirm Ok: ", data.texto);
          },
        },
        {
          text: "Cancel",
          role: "cancel",
          handler: () => {
            console.log("cancelar: ");
          },
        },
      ],
    });

    await alert.present();
  }

  ngOnDestroy(){
    console.log('destroy');
  }
}
