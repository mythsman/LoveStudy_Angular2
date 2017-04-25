import {Injectable} from "@angular/core";
import {Article, School, User} from "./objects";
import {Http} from "@angular/http";
import "rxjs/add/operator/toPromise";
import {SaveStateService} from './save-state.service'

@Injectable()
export class ApiService {

    private getListUrl = "http://www.wspage3.com/LoveStudy/common";

    private getUserUrl = "http://www.wspage3.com/LoveStudy/user?oprateType=getUser";

    private getArticlesUrl = "http://www.wspage3.com/LoveStudy/file?oprateType=getArticles";

    private getArticleUrl = "http://www.wspage3.com/LoveStudy/file?oprateType=getArticle";

    private toggleFavouriteUrl = "http://www.wspage3.com/LoveStudy/user?oprateType=toggleFavourite";

    private getFavouriteUrl = "http://www.wspage3.com/LoveStudy/user?oprateType=getFavourite";

    private getUploadedUrl = "http://www.wspage3.com/LoveStudy/user?oprateType=getUploaded";

    public Uid = "";

    constructor(private http: Http) {

    }

    private handleError(error: any): Promise<any> {
        return Promise.reject(error.message || error);
    }

    getUser(): Promise<User> {
        
        return this.http.get(this.getUserUrl + "&uid=" + this.Uid)
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
        return this.http.get(this.getArticlesUrl + "&school=" + schoolName + "&college=" + collegeName + "&course=" + courseName)
            .toPromise()
            .then(response => response.json() as Article[])
            .catch(this.handleError);
    }

    getArticle(fid: string): Promise<Article> {
        return this.http.get(this.getArticleUrl + "&fid=" + fid)
            .toPromise()
            .then(response => response.json() as Article)
            .catch(this.handleError);
    }

    toggleFavourite(fid: string) {
        return this.http.get(this.toggleFavouriteUrl + "&uid=" + this.Uid + "&fid=" + fid)
            .toPromise()
            .then()
            .catch(this.handleError);
    }

    getFavourite(): Promise<Article[]> {
        return this.http.get(this.getFavouriteUrl + "&uid=" + this.Uid)
            .toPromise()
            .then(response => response.json() as Article[])
            .catch(this.handleError);
    }

    getUploaded(): Promise<Article[]> {
        return this.http.get(this.getUploadedUrl + "&uid=" + this.Uid)
            .toPromise()
            .then(response => response.json() as Article[])
            .catch(this.handleError);
    }
}
