import {Component, OnInit} from '@angular/core';
import {ApiService} from './api.service';
import {User} from './objects';

@Component({
    selector: 'setting-page',
    templateUrl: 'app/setting-page.html',
})

export class SettingPageComponent implements OnInit {
    user: User;

    constructor(private apiService: ApiService) {
    }

    updateUser() {
        this.apiService.getUser().then(user => {
            this.user = user;
        });
    }

    ngOnInit(): void {
        this.updateUser();
    }


}
