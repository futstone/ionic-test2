import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';

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
    { title: 'Targeted CV', pageName: 'TabsPage', tabComponent: 'HomePage', index: 0, icon: 'create' },
    { title: 'Project work', pageName: 'TabsPage', tabComponent: 'ProjectsPage', index: 1, icon: 'construct' },
    { title: 'Extra Curriculum activities', pageName: 'TabsPage', tabComponent: 'ExtraPage', index: 2, icon: 'thumbs-up' },
    { title: 'Contact information', pageName: 'TabsPage', tabComponent: 'ContactPage', index: 3, icon: 'contact' },
    { title: 'About', pageName: 'TabsPage', tabComponent: 'AboutPage', index: 4, icon: 'information-circle' }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

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

}
