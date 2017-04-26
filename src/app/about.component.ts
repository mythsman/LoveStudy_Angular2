import {Component} from '@angular/core';
import {Location} from '@angular/common';

@Component({
    selector: "about",
    templateUrl: 'about.html'

})
export class AboutComponent {
    constructor(private location: Location) {
    }
	goBack(){
		this.location.back();
	}

} 
