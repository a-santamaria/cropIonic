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
   image: any;
   zone: any;
   output: any;

  constructor(private _navController: NavController) {
    this.base64Image = "https://placehold.it/150x150";
    this.zone = new NgZone({enableLongStackTrace: false});
    this.output = {};
    this.image = new Image();
  }

  goToFactsPage() {
    this._navController.push(ScientificFactsPage);
  }

  goToCropImagePage() {
    this._navController.push(CropImagePage, {
      image: this.image,
      output: this.output
    });
  }

  takePicture() {
     Camera.getPicture({
        destinationType: Camera.DestinationType.FILE_URI,
        targetWidth: 1000,
        targetHeight: 1000,
        correctOrientation: true
      }).then((imageURI) => {
      // imageData is a base64 encoded string
        console.log(imageURI);
        this.image.src =  imageURI;
        // this.base64Image = "data:image/jpeg;base64," + imageURI;
      }, (err) => {
        console.log(err);
      });
  }
}

// bootstrap(AppComponent);