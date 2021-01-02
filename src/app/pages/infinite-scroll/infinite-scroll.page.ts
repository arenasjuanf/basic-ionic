import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: "app-infinite-scroll",
  templateUrl: "./infinite-scroll.page.html",
  styleUrls: ["./infinite-scroll.page.scss"],
})
export class InfiniteScrollPage implements OnInit {
  data: any[] = Array(20);
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  constructor() {}

  ngOnInit() {}

  loadData(evento) {
    console.log(evento);
    if (this.data.length >= 50) {
      evento.target.complete();
      this.infiniteScroll.disabled = true;
      return;
    }
    setTimeout(() => {
      const tmp = Array(20);
      this.data.push(...tmp);
      evento.target.complete();
    }, 500);
  }
}
