import {Component} from '@angular/core';
import { bootstrap }    from '@angular/platform-browser-dynamic';
import {NavController} from 'ionic-angular';
import {ScientificFactsPage} from '../scientific-facts-page/scientific-facts-page';
import {ImageCropperComponent, CropperSettings} from 'ng2-img-cropper';
import { AppComponent } from './app.component';

@Component({
  templateUrl: 'build/pages/home-page/home-page.html',
  directives: [AppComponent]
})
export class HomePage {
  constructor(private _navController: NavController) {
  }

  goToFactsPage(){
    this._navController.push(ScientificFactsPage);
  }
}

// bootstrap(AppComponent);