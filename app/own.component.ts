import {Component, OnInit, OnDestroy} from '@angular/core';
import {LocalService} from './local.service';
import {ApiService} from './api.service';
import {Article} from "./objects";
@Component({
    selector: "own",
    templateUrl: 'app/own.html'

})
export class OwnComponent implements OnInit {
    constructor(private localService: LocalService, private apiService: ApiService) {
    }

    uploadedArticles: Article[];

    ngOnInit() {
        this.localService.setTabHide(true);
        this.localService.setTitle("我的文件");
        this.apiService.getUploaded().then(articles => this.uploadedArticles = articles);

    }

    ngOnDestroy() {
        this.localService.setTabHide(false);
    }

} 
