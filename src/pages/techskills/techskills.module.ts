import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TechskillsPage } from './techskills';

@NgModule({
  declarations: [
    TechskillsPage,
  ],
  imports: [
    IonicPageModule.forChild(TechskillsPage),
  ],
})
export class TechskillsPageModule {}
