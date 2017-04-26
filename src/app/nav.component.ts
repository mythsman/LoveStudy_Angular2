import {Component, OnInit, AfterViewInit} from "@angular/core";
import {ApiService} from "./api.service";
import {State} from "./objects";
import {SaveStateService} from "./save-state.service";


declare var Swiper: any;

@Component({
    selector: 'nav',
    templateUrl: 'nav.html',
})

export class NavComponent implements OnInit,AfterViewInit {

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
        let storedState = this.saveStateService.state;

        if (!storedState) {
            this.state = new State();

            this.saveStateService.state = this.state;
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

            })
        } else {
            this.state = storedState;
        }
    }

    ngAfterViewInit() {
        setTimeout(() => {
            new Swiper('.swiper-container', {
                direction: 'horizontal',
                loop: true,
                autoplay: 2000,
                autoplayDisableOnInteraction: false,
                pagination: '.swiper-pagination',
                paginationClickable: true,
                observer: true,
            })
        }, 5000)

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
        this.onCollegeChange(this.state.curSchool.colleges[0].name);
    }

    onCollegeChange(collegeName: string) {
        this.state.curCollege = this.state.curSchool.colleges.find(op => op.name == collegeName);
    }

    onCourseChange(courseName: string) {
        this.state.curCourse = this.state.curCollege.courses.find(op => op.name == courseName);
    }

}
