import {Injectable} from '@angular/core';
import {User, Article, School, College, Course} from './objects';


@Injectable()
export class LocalService {
    tabHide: boolean;
    title: string;
    uid: string;


    setUid(uid:string){
        this.uid=uid;
    }

    getUid():string{
        return this.uid;
    }

    setTabHide(op: boolean) {
        this.tabHide = op;
    }

    getTabHide() {
        return this.tabHide;
    }

    setTitle(title: string) {
        this.title = title;
    }

    getTitle() {
        return this.title;
    }
}

