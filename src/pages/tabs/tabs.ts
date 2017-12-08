import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  tab1Root="HomePage";
  tab2Root="TechskillsPage";
  tab3Root="SoftskillsPage";
  tab4Root="ProjectsPage";
  tab5Root="ExtraPage";
  tab6Root="ContactPage";
  tab7Root="AboutPage";
  myIndex: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.myIndex = navParams.data.tabIndex || 0;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
