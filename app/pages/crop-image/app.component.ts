import { Component, Input } from '@angular/core';
import {ImageCropperComponent, CropperSettings} from 'ng2-img-cropper';

@Component({
  selector: 'test-app',
  template: `<div>
        <img-cropper [image]="img" [settings]="cropperSettings"></img-cropper><br>
        <!-- <img [src]="data.image" [width]="cropperSettings.croppedWidth" [height]="cropperSettings.croppedHeight">-->
    </div>`,
    directives: [ImageCropperComponent]
})
export class AppComponent {
    @Input() img;
    data: any;
    cropperSettings: CropperSettings;

    constructor() {
        
        this.cropperSettings = new CropperSettings();
        this.cropperSettings.width = 100;
        this.cropperSettings.height = 100;
        this.cropperSettings.croppedWidth =100;
        this.cropperSettings.croppedHeight = 100;
        this.cropperSettings.canvasWidth = 400;
        this.cropperSettings.canvasHeight = 300;

        this.data = {};
        
    }

    ngOnInit() {
        console.log("en app component " + this.img);
    }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/