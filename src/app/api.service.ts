import {Injectable} from "@angular/core";
import {Article, School, User} from "./objects";
import {Http} from "@angular/http";
import "rxjs/add/operator/toPromise";
import {Md5} from "ts-md5/dist/md5";

@Injectable()
export class ApiService {

    private getListUrl = "http://www.wspage3.com/LoveStudy/common";

    private getUserUrl = "http://www.wspage3.com/LoveStudy/user?oprateType=getUser";

    private getArticlesUrl = "http://www.wspage3.com/LoveStudy/file?oprateType=getArticles";

    private getArticleUrl = "http://www.wspage3.com/LoveStudy/file?oprateType=getArticle";

    private toggleFavouriteUrl = "http://www.wspage3.com/LoveStudy/user?oprateType=toggleFavourite";

    private getFavouriteUrl = "http://www.wspage3.com/LoveStudy/user?oprateType=getFavourite";

    private getUploadedUrl = "http://www.wspage3.com/LoveStudy/user?oprateType=getUploaded";

    // private getListUrl = "http://www.wspage3.com/LoveStudy/getList";
    //
    // private getUserUrl = "http://www.wspage3.com/LoveStudy/getUser";
    //
    // private getArticlesUrl = "http://www.wspage3.com/LoveStudy/getArticles";
    //
    // private getArticleUrl = "http://www.wspage3.com/LoveStudy/getArticle";
    //
    // private toggleFavouriteUrl = "http://www.wspage3.com/LoveStudy/toggleFavourite";
    //
    // private getFavouriteUrl = "http://www.wspage3.com/LoveStudy/getFavourite";
    //
    // private getUploadedUrl = "http://www.wspage3.com/LoveStudy/getUploaded";

    public Uid = "";

    constructor(private http: Http) {

    }

    private handleError(error: any): Promise<any> {
        return Promise.reject(error.message || error);
    }

    encryptUrl(url: string): string {
        let time = new Date().getTime();
        let signature = Md5.hashStr(url + time * 2 + 1);
        return url + "&time=" + time + "&signature=" + signature;
    }

    getUser(): Promise<User> {

        let url = this.getUserUrl + "&uid=" + this.Uid;

        return this.http.get(this.encryptUrl(url))
            .toPromise()
            .then(response => response.json() as User)
            .catch(this.handleError);
    }

    getList(): Promise<School[]> {
        return this.http.get(this.getListUrl)
            .toPromise()
            .then(response => response.json() as School[])
            .catch(this.handleError);
    }

    getArticles(schoolName: string, collegeName: string, courseName: string): Promise<Article[]> {

        let url = this.getArticlesUrl + "&school=" + schoolName + "&college=" + collegeName + "&course=" + courseName + "&uid=" + this.Uid;

        return this.http.get(this.encryptUrl(url))
            .toPromise()
            .then(response => response.json() as Article[])
            .catch(this.handleError);
    }

    getArticle(fid: string): Promise<Article> {
        let url = this.getArticleUrl + "&fid=" + fid + "&uid=" + this.Uid;
        return this.http.get(this.encryptUrl(url))
            .toPromise()
            .then(response => response.json() as Article)
            .catch(this.handleError);
    }

    toggleFavourite(fid: string) {
        let url = this.toggleFavouriteUrl + "&uid=" + this.Uid + "&fid=" + fid;
        return this.http.get(this.encryptUrl(url))
            .toPromise()
            .then()
            .catch(this.handleError);
    }

    getFavourite(): Promise<Article[]> {
        let url = this.getFavouriteUrl + "&uid=" + this.Uid;
        return this.http.get(this.encryptUrl(url))
            .toPromise()
            .then(response => response.json() as Article[])
            .catch(this.handleError);
    }

    getUploaded(): Promise<Article[]> {
        let url = this.getUploadedUrl + "&uid=" + this.Uid;
        return this.http.get(this.encryptUrl(url))
            .toPromise()
            .then(response => response.json() as Article[])
            .catch(this.handleError);
    }
}
