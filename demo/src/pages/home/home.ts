import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { TranslateService } from "ng2-translate";
import { AboutPage } from "../about/about";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})                        //更多样例：https://blog.csdn.net/qq_15096707/article/details/52727672
export class HomePage {
  RadioOpen: boolean;
  RadioResult;
  langs: [{}, {}, {}];
  constructor(public navCtrl: NavController, public alerCtrl: AlertController, public translate: TranslateService) {

  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad HomePage");
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
