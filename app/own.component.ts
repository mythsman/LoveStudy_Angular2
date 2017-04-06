import {Component, OnInit, OnDestroy} from '@angular/core';
import {ApiService} from './api.service';
import {Article} from "./objects";
@Component({
    selector: "own",
    templateUrl: 'app/own.html'

})
export class OwnComponent implements OnInit {
    constructor( private apiService: ApiService) {
    }

    uploadedArticles: Article[];

    ngOnInit() {
        this.apiService.getUploaded().then(articles => this.uploadedArticles = articles);

    }

} 
