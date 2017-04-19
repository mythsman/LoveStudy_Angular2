import {Component, OnInit} from '@angular/core';
import {ApiService} from './api.service';
import {School, College, Course, Article,User} from './objects';

declare var Swiper:any;

@Component({
    selector: 'nav',
    templateUrl: 'app/nav.html',
})

export class NavComponent implements OnInit {

    articles: Article[];
    schools: School[];
    curSchool: School;
    curCollege: College;
    curCourse: Course;

    module: number;
    titles = [
        "悦学首页",
        "悦学文库",
        "我的设置",
    ]
    title="";
    user: User;

    constructor(private apiService: ApiService) {
    }

    ngOnInit(): void {
        this.module = 0;
        this.title=this.titles[this.module];
        new Swiper('.swiper-container', {
            direction: 'horizontal',
            loop:true,
            autoplay: 2000,
            autoplayDisableOnInteraction: false,
            pagination: '.swiper-pagination',
            paginationClickable: true,
            observer:true,
        });
        this.apiService.getList().then(list => {
            this.schools = list;
            this.curSchool = this.schools[0];
            this.curCollege = this.curSchool.colleges[0];
            this.curCourse = this.curCollege.courses[0];
        });
        this.updateUser();
    }

    onSelect(num: number) {
        this.module = num;
        this.title=this.titles[this.module];
    }

    onSearch() {
        this.apiService.getArticles(this.curSchool.name,this.curCollege.name,this.curCourse.name).then(articles => {
            this.articles = articles;
        });
    }

    onSchoolChange(schoolName: string) {
        this.curSchool = this.schools.find(op => op.name == schoolName);
    }

    onCollegeChange(collegeName: string) {
        this.curCollege = this.curSchool.colleges.find(op => op.name == collegeName);
    }

    onCourseChange(courseName: string) {
        this.curCourse = this.curCollege.courses.find(op => op.name == courseName);
    }
    updateUser() {
        this.apiService.getUser().then(user => {
            this.user = user;
        });
    }
}
