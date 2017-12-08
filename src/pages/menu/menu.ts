import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

export interface PageInterface {
  title: string;
  pageName: string;
  tabComponent?: any;
  index?: number;
  icon: string;
}

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
  rootPage = "TabsPage";
  @ViewChild(Nav) nav: Nav;

  pages: PageInterface[] = [
    { title: 'Personal Profile', pageName: 'TabsPage', tabComponent: 'HomePage', index: 0, icon: 'create' },
    { title: 'Technical skills', pageName: 'TabsPage', tabComponent: 'TechskillsPage', index: 1, icon: 'phone-portrait' },
    { title: 'Soft skills', pageName: 'TabsPage', tabComponent: 'SoftskillsPage', index: 2, icon: 'wine' },
    { title: 'Personal projects', pageName: 'TabsPage', tabComponent: 'ProjectsPage', index: 3, icon: 'construct' },
    { title: 'Extra Curriculum activities', pageName: 'TabsPage', tabComponent: 'ExtraPage', index: 4, icon: 'thumbs-up' },
    { title: 'Contact information', pageName: 'TabsPage', tabComponent: 'ContactPage', index: 5, icon: 'contact' },
    { title: 'Team projects', pageName: 'TabsPage', tabComponent: 'AboutPage', index: 6, icon: 'nuclear' }
  ];

  constructor(public fire: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
  }

  //Takes PageInterface-object reference as an argument and figures out whether it's a tab page or not,
  //in case not: root page will be set
  openPage(page: PageInterface) {
    let params = {};

    if (page.index) {
      params = { tabIndex: page.index };
    }
    if (this.nav.getActiveChildNavs() && page.index != undefined) {
      this.nav.getActiveChildNavs()[0].select(page.index);
    } else {
      this.nav.setRoot(page.pageName, params);
    }
  }
  //Figures out if button text (span) should get primary class or not,
  //and therefore displayed as different color (selected)
  isActive(page: PageInterface) {
    let childNav = this.nav.getActiveChildNavs()[0];

    if (childNav) {
      if (childNav.getSelected() && childNav.getSelected().root === page.tabComponent) {
        return 'primary';
      }
      return;
    }
    if (this.nav.getActive() && this.nav.getActive().name === page.pageName) {
      return 'primary';
    }
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

  logout() {
    this.fire.auth.signOut().then(() => {
      this.nav.setRoot('StartPage');
    });
  }
}
