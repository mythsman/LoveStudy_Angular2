import {Component, OnInit, OnDestroy} from '@angular/core';
import {ApiService} from './api.service';
import {School, College, Course} from './objects';
import {Location} from '@angular/common';
import {FileUploader} from 'ng2-file-upload';

@Component({
    selector: "upload",
    templateUrl: 'upload.html',

})
export class UploadComponent implements OnInit {
    schools: School[];
    curSchool: School;
    curCollege: College;
    curCourse: Course;


    uploader: FileUploader = new FileUploader({
        url: "http://localhost:7777/upload",
        method: "POST",
    });

    upload() {
        this.uploader.queue[0].onSuccess = function (response, status, headers) {
            console.log("uploaded.")
            // 上传文件成功
            if (status == 200) {
                // 上传文件后获取服务器返回的数据
                let tempRes = JSON.parse(response);
            } else {
                // 上传文件后获取服务器返回的数据错误
            }
        };
        this.uploader.queue[0].upload(); // 开始上传
    }

    selectedFileOnChanged(event: any) {
        // 这里是文件选择完成后的操作处理
        console.log(event.target.value);
    }

    constructor(private apiService: ApiService, private location: Location) {
    }

    ngOnInit() {

        this.apiService.getList().then(list => {

            this.schools = list;
            this.curSchool = this.schools[0];
            this.curCollege = this.curSchool.colleges[0];
            this.curCourse = this.curCollege.courses[0];
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
    goBack(){
        this.location.back();
    }

} 
