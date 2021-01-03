import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: "app-loading",
  templateUrl: "./loading.page.html",
  styleUrls: ["./loading.page.scss"],
})
export class LoadingPage implements OnInit {
  constructor(public loadingController: LoadingController) {}
  private loading: any;
  ngOnInit() {
    this.presentLoading("Loading");
  }

  async presentLoading(message: string) {
    this.loading = await this.loadingController.create({
      spinner: "crescent",
      //duration: 5000,
      message,
      translucent: true,
      backdropDismiss: false,
    });
    await this.loading.present();
    setTimeout(() => {
      this.loading.dismiss();
    }, 3000);
    const { role, data } = await this.loading.onDidDismiss();
    console.log("Loading dismissed!");
  }
}
