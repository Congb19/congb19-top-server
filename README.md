# congb19-top-server

congb19-top 网站后端。

## 技术栈

koa2, mysql

## 接口文档

baseURL: http://www.congb19.top/api

### 一、公用 api

#### 1. 获取日期 getDate

##### REQUEST

```
GET /public/getDate
```

##### RESPONSE

```
{
  title: "date__{year} / {month} / {date}",
  code: 200,
  data: {
    year: 2020,
    month: 1,
    date: 1,
    day: 1,
  },
}
```
