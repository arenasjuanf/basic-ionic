import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { PopInfoComponent } from './pop-info/pop-info.component';



@NgModule({
  declarations: [HeaderComponent, PopInfoComponent],
  imports: [CommonModule, IonicModule],
  exports: [HeaderComponent, PopInfoComponent],
})
export class ComponentsModule {}
