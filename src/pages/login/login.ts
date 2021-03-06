import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  //these will hold username and password (ngModel in .html)
  username = 'test@test.fi';
  password = 'password';

  constructor(
    private fire: AngularFireAuth,
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  //This function is called when user clicks signIn()
  signIn() {
    this.fire.auth.signInWithEmailAndPassword(this.username, this.password)
    .then(data => {
      this.successAlert(this.fire.auth.currentUser.email);
      this.navCtrl.setRoot('MenuPage');
    })
    .catch(error => {
      this.failAlert(error);
    });
  }
  //This function will give success alert, if login succesful
  successAlert(msg) {
    let alert = this.alertCtrl.create({
      title: 'Welcome',
      subTitle: 'You are logged in as ' + msg,
      buttons: ['OK']
    });
    alert.present();
  }
  //This will give alert of failed login
  failAlert(msg) {
    let alert = this.alertCtrl.create({
      title: 'Fail',
      subTitle: msg,
      buttons: ['OK']
    });
    alert.present();
  }
}
