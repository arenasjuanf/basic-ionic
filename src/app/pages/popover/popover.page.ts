import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopInfoComponent } from 'src/app/components/pop-info/pop-info.component';

@Component({
  selector: "app-popover",
  templateUrl: "./popover.page.html",
  styleUrls: ["./popover.page.scss"],
})
export class PopoverPage implements OnInit {
  constructor(public popoverController: PopoverController) {}

  ngOnInit() {}

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: PopInfoComponent,
      cssClass: "my-custom-class",
      event: ev,
      translucent: true,
    });
    return await popover.present();
  }
}
