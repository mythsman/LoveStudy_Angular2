import {Component, OnInit} from '@angular/core';
import {ApiService} from './api.service';
import {ActivatedRoute, Router} from '@angular/router';
@Component({
    selector: "login",
    templateUrl: 'app/login.html'

})
export class LoginComponent {
    constructor(private apiService: ApiService, private route: ActivatedRoute, private router: Router) {
        this.route.params.subscribe(params => {
            this.apiService.Uid = params['uid'];
        });
        this.router.navigateByUrl("/nav");
    }
} 
