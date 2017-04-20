import {Component} from '@angular/core';
import {Location} from '@angular/common';

@Component({
    selector: "about",
    templateUrl: 'app/about.html'

})
export class AboutComponent {
    constructor(private location: Location) {
    }


} 
