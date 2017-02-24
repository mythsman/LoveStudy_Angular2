import {Component, OnInit} from '@angular/core';
import {ApiService} from './api.service';
import {LocalService} from './local.service';
import {School, College, Course, Article} from './objects';

@Component({
    selector: 'search-page',
    templateUrl: 'app/search-page.html',
})

export class SearchPageComponent implements OnInit {
    articles: Article[];
    schools: School[];
    curSchool: School;
    curCollege: College;
    curCourse: Course;

    constructor(private apiService: ApiService, private localService: LocalService) {
    }

    ngOnInit(): void {
        this.apiService.getList().then(list => {
            this.schools = list;
            this.curSchool = this.schools[0];
            this.curCollege = this.curSchool.colleges[0];
            this.curCourse = this.curCollege.courses[0];
        });

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
}
