import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  data:string;
  constructor(public navCtrl: NavController, public paras: NavParams) {
    this.data=this.paras.get("test");
  }

}
