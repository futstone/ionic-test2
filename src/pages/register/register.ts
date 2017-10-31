import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  username: string;
  password: string;

  constructor(
    private fire: AngularFireAuth,
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController){
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
  //This function is called when user clicks createAccount()
  createAccount() {
    this.fire.auth.createUserWithEmailAndPassword(this.username, this.password)
      .then(data => {
        this.successAlert(this.fire.auth.currentUser.email);
      })
      .catch(error => {
        this.failAlert(error);
      });
    //just checking here..
    console.log("created account:" + this.username + " " + this.password)
  }
  //This function will give success alert, if register succesful
  successAlert(msg) {
    let alert = this.alertCtrl.create({
      title: 'Welcome',
      subTitle: 'Created account: ' + msg,
      buttons: ['OK']
    });
    alert.present();
  }
  //This will give alert of failed register
  failAlert(msg) {
    let alert = this.alertCtrl.create({
      title: 'Fail',
      subTitle: msg,
      buttons: ['OK']
    });
    alert.present();
  }

}
