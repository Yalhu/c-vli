

快速通过模版开始一个新项目。  
只做模板统一管理，不针对模板做特别修改。

1. 创建项目时需输入作者（默认git账号），版本号（默认0.1.0），描述信息。
   其他信息可在创建后补全。
2. 模版通过 `git clone`下载到当前路径。
3. 内置多个模板：单页应用，后台管理等。
4. 也可以自己指定git仓库地址 或者 本地路径。

若有其它优秀模板欢迎留言推荐！
### 使用方式
```sh
npm install c-vli
## 查看模版 list|l
vli list ## 当前可用模板
vli l -s all ## 查看所有模板(同 vli l -s)：online, done, doing
vli l -s online,done ## 查看 online,done 两个模板

## 创建项目 create|c
vli create ## 需要手动输入项目目录
vli c dir ## 指定目录‘dir’ 创建项目
vli c dir -t vue2-spa ## 指定模板创建项目
vli c dir -g https://github.com/user/template ## 通过url 创建项目
vli c dir -p local-template-path ## 通过本地文件开始新项目。如果没有package文件，会自动创建

## 其他
vli -h
vli create -h
```
<!-- #### 指令create
--template 
参数：`--git`：有效的git/github等仓库地址。（如果是ssh需注意添加认证成功）
  跳过tpl检查,优先使用giturl
 -->

### 已有模板
online - 优秀开源
vue-admin-template: A minimal vue admin template with Element UI & axios & iconfont & permission control & lint
vue-element-admin: vue-element-admin is a production-ready front-end solution for admin interfaces. It is based on vue and uses the UI Toolkit element-ui.
ant design pro: An out-of-box UI solution for enterprise applications as a React boilerplate.

done - 已完成
vue2-admin-sample: vue2.x 极简后台管理小样。
vue2-spa: vue2.x 单页应用。打包方式：webpack
taro3-sample: taro3 跨端应用，支持小程序，h5。taro打包方式：webpack5

## NEXT
1. - [] 支持<!-- 本地 -->添加/删除模版到模板列表。
2. - [] list 添加参数 -f 过滤模板/模糊搜索。


其他模版(未开始)
<!-- 1. - []  -->
2. - [] react-spa（redux/mobx）
3. - [] vue3.x-spa
4. - [] vue2.x-multiple page
### DISS
1. ~~下载模版为zip文件；需解压~~
2. （全局安装时）模版本地存储


## ISSUE
clone项目模版github路径缩写时提示ssh认证出错。  
所以该用了https的方式去clone 项目。


`下载失败： Error: 'git clone' failed with status 128`
可能是所在的环境网络太差了