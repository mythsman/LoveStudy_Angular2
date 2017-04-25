export class Course {
    name: string;
}

export class College {
    name: string;
    courses: Course[];
}

export class School {
    name: string;
    colleges: College[];
}

export class Article {
    fid: string;
    price: string;
    name: string;
    brief: string;
    source: string;
    size: string;
    page: string;
    download: string;
    isFavourite: string;
}
export class User {
    uid: string;
    name: string;
    level: string;
    point: string;
}

export class State {
    module: number;
    articles: Article[];
    schools: School[];
    curSchool: School;
    curCollege: College;
    curCourse: Course;
    user: User;
}
