# notesAPP-vue2-vuex2
构建一个笔记应用
--------

## 前言

这个项目是改造《[Learn Vuex by Building a Notes App](https://coligo.io/learn-vuex-by-building-notes-app/)》来自国外的coligo.io博客。
我将之升级为使用vue2+vuex2；并添加了markdown处理。

## 界面

![Alt text](./1490067053201.png)

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:9929
npm run dev

# build for production with minification
npm run build
```

## 遇到一些问题

- 比如node-sass安装失败，大部分是国内都是使用淘宝的`cnpm`。
- node项目clone问题（`npm cache clean`或端口被占）
- sublime text 3耗内存（`"index_files": false`）
- vue 项目文件路径（尤其是图片资源的路径）