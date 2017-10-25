import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  username: string;

  constructor(private fire: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
    this.username = this.fire.auth.currentUser.email;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

}
