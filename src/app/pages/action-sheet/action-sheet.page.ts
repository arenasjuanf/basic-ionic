import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: "app-action-sheet",
  templateUrl: "./action-sheet.page.html",
  styleUrls: ["./action-sheet.page.scss"],
})
export class ActionSheetPage implements OnInit {
  constructor(private actionSheetController: ActionSheetController) {}

  ngOnInit() {}

  private buttons = [
    {
      cssClass: 'red',
      text: "Delete",
      role: "destructive",
      icon: "trash",
      handler: () => {
        console.log("Delete clicked");
      },
    },
    {
      text: "Share",
      icon: "share",
      handler: () => {
        console.log("Share clicked");
      },
    },
    {
      text: "Play (open modal)",
      icon: "caret-forward-circle",
      handler: () => {
        console.log("Play clicked");
      },
    },
    {
      text: "Favorite",
      icon: "heart",
      handler: () => {
        console.log("Favorite clicked");
      },
    },
    {
      text: "Cancel",
      icon: "close",
      role: "cancel",
      handler: () => {
        console.log("Cancel clicked");
      },
    },
  ];

  async active() {
    const actionSheet = await this.actionSheetController.create({
      header: "Albums",
      backdropDismiss: false,
      cssClass: "my-custom-class",
      buttons: this.buttons,
    });
    await actionSheet.present();
  }
}
