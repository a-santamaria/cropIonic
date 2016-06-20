import {Component, NgZone} from '@angular/core';
import { bootstrap }    from '@angular/platform-browser-dynamic';
import {NavController} from 'ionic-angular';
import {ScientificFactsPage} from '../scientific-facts-page/scientific-facts-page';
import {Camera} from 'ionic-native';
import {CropImagePage} from '../crop-image/crop-image';

@Component({
  templateUrl: 'build/pages/home-page/home-page.html'
})
export class HomePage {
   base64Image: string;
   zone: any;

  constructor(private _navController: NavController) {
    this.base64Image = "https://placehold.it/150x150";
    this.zone = new NgZone({enableLongStackTrace: false});
  }

  goToFactsPage() {
    this._navController.push(ScientificFactsPage);
  }

  goToCropImagePage() {
    this._navController.push(CropImagePage, {
      image: this.base64Image
    });
  }

  takePicture() {
     Camera.getPicture({
        destinationType: Camera.DestinationType.DATA_URL,
        targetWidth: 1000,
        targetHeight: 1000
      }).then((imageData) => {
      // imageData is a base64 encoded string
        this.base64Image = "data:image/jpeg;base64," + imageData;
      }, (err) => {
        console.log(err);
      });
  }
}

// bootstrap(AppComponent);