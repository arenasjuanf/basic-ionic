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
    {
      icon: "time",
      name: "date-time",
      route: "/date-time",
    },
    {
      icon: "add-circle",
      name: "fab",
      route: "/fab",
    },
    {
      icon: "grid",
      name: "grid - rows",
      route: "/grid",
    },
    {
      icon: "infinite",
      name: "infinite-scroll",
      route: "/infinite-scroll",
    },
    {
      icon: "hammer",
      name: "Inputs",
      route: "/input",
    },
    {
      icon: "list",
      name: "listas - sliding",
      route: "/list",
    },
    {
      icon: "reorder",
      name: "listas - reorder",
      route: "/list-reorder",
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
