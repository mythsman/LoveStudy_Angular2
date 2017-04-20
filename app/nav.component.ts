import {Component, OnInit} from '@angular/core';
import {ApiService} from './api.service';
import {School, College, Course, Article, User, State} from './objects';
import {SaveStateService} from "./save-state.service"
import {isUndefined} from "util";
import {SIGUNUSED} from "constants";

declare var Swiper: any;

@Component({
    selector: 'nav',
    templateUrl: 'app/nav.html',
})

export class NavComponent implements OnInit {

    titles = [
        "悦学首页",
        "悦学文库",
        "我的设置",
    ]

    state: State;

    constructor(private apiService: ApiService,
                private saveStateService: SaveStateService) {
    }

    ngOnInit(): void {
        let storedState = this.saveStateService.getState();
        if (!storedState) {
            this.state = new State();
            this.saveStateService.setState(this.state);
            this.state.module = 0;

            let p1 = this.apiService.getList().then(list => {
                this.state.schools = list;
                this.state.curSchool = this.state.schools[0];
                this.state.curCollege = this.state.curSchool.colleges[0];
                this.state.curCourse = this.state.curCollege.courses[0];
            });
            let p2 = this.apiService.getUser().then(user => {
                this.state.user = user;
            });
            let pall = Promise.all([p1, p2]).then(success => {
                new Swiper('.swiper-container', {
                    direction: 'horizontal',
                    loop: true,
                    autoplay: 2000,
                    autoplayDisableOnInteraction: false,
                    pagination: '.swiper-pagination',
                    paginationClickable: true,
                    observer: true,
                });
            })
        } else {
            this.state = storedState;
        }
    }

    onSelect(num: number) {
        this.state.module = num;
    }

    onSearch() {
        this.apiService.getArticles(this.state.curSchool.name, this.state.curCollege.name, this.state.curCourse.name).then(articles => {
            this.state.articles = articles;
        });
    }

    onSchoolChange(schoolName: string) {
        this.state.curSchool = this.state.schools.find(op => op.name == schoolName);
    }

    onCollegeChange(collegeName: string) {
        this.state.curCollege = this.state.curSchool.colleges.find(op => op.name == collegeName);
    }

    onCourseChange(courseName: string) {
        this.state.curCourse = this.state.curCollege.courses.find(op => op.name == courseName);
    }

}
