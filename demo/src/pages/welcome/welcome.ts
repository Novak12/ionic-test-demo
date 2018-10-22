import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { TranslateService } from "ng2-translate";

/**
 * Generated class for the WelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {
  RadioOpen: boolean;
  RadioResult;
  langs: [{}, {}, {}];
  constructor(public navCtrl: NavController, public navParams: NavParams, public alerCtrl: AlertController, public translate: TranslateService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
  }

  changeLanguage() {
    this.langs = [{ language: "English", type: "en" }, { language: "简体中文", type: "zh" },
    { language: "繁体中文", type: "tw" }];
    let alert = this.alerCtrl.create();
    alert.setTitle('语言选择');
    for (let lang of this.langs) {
      alert.addInput({
        type: 'radio',
        label: lang["language"],
        value: lang["type"],
        checked: (lang["type"] == this.translate.getDefaultLang() ? true : false)
      });
    }
    alert.addButton('取消');
    alert.addButton({
      text: '确认',
      handler: data => {
        this.RadioOpen = false;
        this.RadioResult = data;
        this.translate.setDefaultLang(data);
        this.translate.use(data);
      }
    });

    alert.present().then(() => {
      this.RadioOpen = true;
    });
  }

  gotoAboutPage() {
    /* this.navCtrl.push(AboutPage, { test: "hello" }); */
    this.navCtrl.push('NewsPage', { test: "hello" })
  }
}
