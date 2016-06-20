import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {ImageCropperComponent, CropperSettings} from 'ng2-img-cropper';
import { AppComponent } from './app.component';

/*
  Generated class for the CropImagePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/crop-image/crop-image.html',
  directives: [AppComponent]
})
export class CropImagePage {
  dataImg: any;
  constructor(private nav: NavController, private navParams: NavParams) {
    this.dataImg = this.navParams.get('image');
    console.log("recibí: "+this.dataImg);
  }
}
