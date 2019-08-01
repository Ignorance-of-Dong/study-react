## git 命令解析

- git add .   // 将本地修改的文件添加到暂存区

- git commit -m ''  // 对暂存区的文件添加描述

- git pull // 拉取远程代码

- git push // 向远程仓库上传本地代码

## 代码规范问题

- 无用的变量声明请删除

- 组件命名规范【 1. 组件命名采用大驼峰写法； eg: LogoButton 的命名方式 2. 方法的的命名采用小驼峰命名方式 eg: userInput】

- 常见规范中【代码空格规范】   ----  慢慢改变不着急  -----

    if / else / for / while / function / switch / do / try / catch / finally 关键字后。如if (condition) { ... }

    函数声明名称与参数之间。如function name (arg) { ... }

    二元运算符两侧。如var a = !arr.length;

    代码块起始的左花括号 { 前。如

        if (condition) {
        }
	
        while (condition) {
        }
	
        function funcName() {
        }

    在对象创建时，属性中的 : 之后

        var obj = {
            a: 1,
            b: 2,
            c: 3
        };

    不位于行尾的, 和 ; 后。let a, b, c;

    选择器 与 { 之间

        .selector {

        }

    

## 目录规范

- 公共组件写在component文件中 【在component文件中写的组件需要单独建立文件夹也就是每个组件分别建立一个对应的文件夹中（文件夹的命名采用上方组件的命名规范，文件夹内的文件名称统一命名为index.jsx + index.scss 两个文件）】

- 页面写在page文件中 【同上】 

- 公共的使用方法写在utils文件夹中【命名规范请看代码规范问题第二条】

- 请求的方法写在api 文件夹下的index.js

## 注意事项

- 如果组件内部显示声明了constructor必须在其内部加上super(), 根据es6 class类函数规范， constuctor 是在继承其他类的时候定义的，super函数是用来继承被继承类的this指向