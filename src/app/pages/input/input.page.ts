import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.page.html',
  styleUrls: ['./input.page.scss'],
})
export class InputPage implements OnInit {

  constructor() { }

  usuario = {
    email: '',
    password: ''
  };

  ngOnInit() {
  }

  onSubmitTemplate(formulario){
    console.log(formulario);
  }

}
