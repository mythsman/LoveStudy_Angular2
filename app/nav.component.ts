import {Component, OnInit} from '@angular/core';
import {LocalService} from './local.service';
import {ApiService} from './api.service';
import {Location} from '@angular/common';

@Component({
    selector: 'nav',
    templateUrl: 'app/nav.html',
})

export class NavComponent implements OnInit {
    module: number;
    titles = [
        "悦学首页",
        "悦学文库",
        "我的设置",
    ]

    constructor(private localService: LocalService, private location: Location, private apiService: ApiService) {
    }

    ngOnInit(): void {
        this.module = 0;
        this.localService.setTitle(this.titles[0]);
        this.localService.setTabHide(false);
    }

    onSelect(num: number) {
        this.module = num;
        this.localService.setTitle(this.titles[num]);
    }

    getTitle() {
        if (this.localService.getTabHide()) {
            return this.localService.getTitle();
        } else {
            return this.titles[this.module];
        }
    }
}
