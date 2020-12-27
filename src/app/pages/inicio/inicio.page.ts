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
  ];
  constructor() {}

  ngOnInit() {}
}

interface componente {
  icon: string;
  name: string;
  route: string;
}
