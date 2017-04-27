## 关于一些json对象的定义

### Course
class Course {
    name: string;
}

### College
class College {
    name: string;
    courses: Course[];
}

### School
class School {
    name: string;
    colleges: College[];
}

### Article
class Article {
    fid: string;
    price: string;
    name: string;
    brief: string;
    source: string;
    size: string;
    page: string;
    download: string;
    isFavourite :string;//1表示已收藏，0表示没有收藏
}

### User
class User {
    uid: string;
    name: string;
    level: string;
    point: string;
}

## 前台访问后台的api

### 获取学校列表信息

|||
|-|-|
|url|http://www.wspage3.com/LoveStudy/common?operateType=getList|
|return|School[]|

### 获取用户信息
|||
|-|-|
|url|http://www.wspage3.com/LoveStudy/user?operateType=getUser&uid=XXX&time=XXX&signature=XXX|
|return|User|

### 获取文章列表
|||
|-|-|
|url|http://www.wspage3.com/LoveStudy/file?operateType=getArticles&school=XXX&college=XXX&course=XXX&uid=XXX&time=XXX&signature=XXX|
|return|Article[]|

### 获取文章信息
|||
|-|-|
|url|http://www.wspage3.com/LoveStudy/file?operateType=getArticle&fid=XXX&uid=XXX&time=XXX&signature=XXX|
|return|Article|

### 获取用户上传的文章信息
|||
|-|-|
|url|http://www.wspage3.com/LoveStudy/file?operateType=getUploaded&uid=XXX&time=XXX&signature=XXX|
|return|Article[]|

### 获取用户收藏的文章信息

|||
|-|-|
|url|http://www.wspage3.com/LoveStudy/user?operateType=toggleFavourite&uid=XXX&time=XXX&signature=XXX|
|return|Article[]|

### 修改用户的收藏信息

|||
|-|-|
|url|http://www.wspage3.com/LoveStudy/user?operateType=toggleFavourite&uid=XXX&fid=XXX&time=XXX&signature=XXX|
|return|Article[]|

## 前台跳转后台的api

|||
|-|-|
|url|http://myths.mythsman.com/login/uid/time/signature|
