import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-checkbox",
  templateUrl: "./checkbox.page.html",
  styleUrls: ["./checkbox.page.scss"],
})
export class CheckboxPage implements OnInit {
  constructor() {}

  ngOnInit() {}

  public data = [
    { name: "primary", selected: true },
    { name: "secondary", selected: false },
    { name: "tertiary", selected: false },
    { name: "success", selected: true },
  ];
}
