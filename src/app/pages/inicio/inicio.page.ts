import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-inicio",
  templateUrl: "./inicio.page.html",
  styleUrls: ["./inicio.page.scss"],
})
export class InicioPage implements OnInit {
  componentes: componente[] = [
    {
      icon: "american-football",
      name: "Action Sheet",
      route: "/action-sheet",
    },
    {
      icon: "analytics-outline",
      name: "Alert",
      route: "/alert",
    },
    {
      icon: "beaker",
      name: "Avatar",
      route: "/avatar",
    },
    {
      icon: "radio-button-on",
      name: "botones y router",
      route: "/button",
    },
    {
      icon: "square-outline",
      name: "card",
      route: "/card",
    },
    {
      icon: "checkbox",
      name: "checkbox",
      route: "/checkbox",
    },
  ];
  constructor() {}

  ngOnInit() {}
}

interface componente {
  icon: string;
  name: string;
  route: string;
}
