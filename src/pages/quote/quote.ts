import { Component } from '@angular/core';
import { ViewController, NavParams, NavController } from 'ionic-angular';

@Component({
  selector: 'page-quote',
  templateUrl: 'quote.html',
})
export class QuotePage 
{
  person: string;
  text: string;
  
  constructor(private viewCtrl:ViewController,
              private navCtrl: NavController,
              private navParams: NavParams
              ){}


  ionViewDidLoad()
  {
    this.person = this.navParams.get('person');
    this.text = this.navParams.get('text');
  }

  onClose(remove = true)
  {
    this.viewCtrl.dismiss(remove);
  }

  onclose()
  {
    this.navCtrl.pop();
  }

}
