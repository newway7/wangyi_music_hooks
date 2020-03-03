最近恶补了一些hooks的知识，拿之前写过的react项目练一下手好了，就是把之前的项目用hooks重写一遍。

就不重新配置了，直接用之前的package.json；
用之前reset.css、rem布局用到的autoRootFontSize.js和config-overrides.js进行css处理；
用deploy.sh提交到github；

将之前用类组件写的代码放在src-example里面用于借鉴。

首先做一下梳理：
项目分成6个板块

#### 1.首页

首页 又分为首页头部组件，轮播图组件，option组件（包含歌单和排行榜入口），歌单封面组件；


### 2.排行榜单
头部组件，榜单组件；


### 3.歌单列表
头部组件（可以和排行榜单的头部组件共用一个组件）；歌单封面组件（可以和首页的歌单封面组件共用一个组件，这俩就大小不一样）

### 4.发现(歌曲详情页面)
发现页包含歌曲头组件，歌曲进度条组件，发现页主体组件，按钮组件（前进后退，暂停，播放）

### 5.搜索页面
头部组件，推荐关键词组件

### 6.歌单歌列表

歌曲组件，歌曲封面组件，歌单的歌曲列表头组件；


除此以外：

### fixed底部的正在播放歌曲组件


### 正在加载组件



### 遇到的问题

使用useEffect();中不能使用console.log(某变量)打印useState;报错，这个钩子函数缺少依赖，

如果加上依赖，会一直调用该异步useEffect；

使用useEffect()，可能会碰到只想调用componentDidUpdate的情形；这种情况下就需要判断与didMount的区别；属于didmount范畴就返回return;由于useEffect()不返回任何东西，所以不能写成return ''; return null;

组件销毁时，怎么做到类似componentWillUnmount的操作？使用useEffect()返回一个函数，移出监听等，可以做到类似componentWillUnmount的操作。

转发ref：新的api：React.forwardRef((props,ref)=>{})包裹组件就可以接收到传入的ref值，从而可以获得子组件实例对象；

### 优化
使用模板字符串给元素添加active样式；避免用三元运算符判断，从而优化了代码；

页面打开速度过慢，许多组件可以异步加载；这样可以减少首屏时间；


修复了返回到/search的bug：
location.pathname !=='/search' && songsData.length!==0
之前返回到/search是存在单曲和歌单的navlink的；



### 没有解决的问题：
ref获取audio组件的属性的赋值有一些bug，总会报错，没有完全调出来；


### 关于代码格式；





















































