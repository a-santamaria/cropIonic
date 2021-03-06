import { Component, Input } from '@angular/core';
import {ImageCropperComponent, CropperSettings} from 'ng2-img-cropper';

@Component({
  selector: 'test-app',
  template: `<div>
        <img-cropper [image]="img" [settings]="cropperSettings" [output]="output">
        </img-cropper>
    </div>`,
    directives: [ImageCropperComponent]
})
export class AppComponent {
    @Input() img;
    @Input() output: any;
    cropperSettings: CropperSettings;

    constructor() {
        
        this.cropperSettings = new CropperSettings();
        
        this.cropperSettings.width = 100;
        this.cropperSettings.height = 100;
        this.cropperSettings.croppedWidth = 100;
        this.cropperSettings.croppedHeight = 100;
        console.log("window "+ window.screen.width + " x " + window.screen.height);
        console.log("inner "+ window.innerWidth + " x " + window.innerHeight);
        this.cropperSettings.canvasWidth = window.innerWidth;
        this.cropperSettings.canvasHeight = window.innerHeight-50;
        this.cropperSettings.keepAspect = false;

        // this.output = {};
        
    }

    ngOnInit() {
        // console.log("en app component " + this.img);
    }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/