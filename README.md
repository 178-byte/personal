# 个人网站

一个现代化、互动性强的个人网站，展示个人信息、技能和项目。

## 功能特点

### 📱 响应式设计
- 适配各种屏幕尺寸，包括桌面、平板和手机
- 移动端优化的导航菜单

### 🎨 现代化UI设计
- 渐变背景和流畅的动画效果
- 卡片式布局和优雅的视觉层次
- 平滑的滚动和过渡效果

### 💫 互动功能
- 导航栏滚动时自动变化样式
- 技能项可点击展开查看详细信息
- 项目卡片点击查看完整详情
- 表单提交功能
- 返回顶部按钮

### 📊 内容模块
1. **首页** - 个人介绍和社交媒体链接
2. **关于我** - 详细的个人信息和背景
3. **技能** - 技能水平展示和详细技术点
4. **项目** - 项目展示和详情查看
5. **联系方式** - 联系表单和联系方式

## 技术栈

- **HTML5** - 语义化标签和现代HTML特性
- **CSS3** - Flexbox、Grid、动画和响应式设计
- **JavaScript** - 交互功能和DOM操作
- **Font Awesome** - 图标库

## 项目结构

```
.
├── index.html          # 主页面结构
├── styles.css          # 样式文件
├── script.js           # 交互功能脚本
└── README.md           # 项目说明文档
```

## 快速开始

### 1. 克隆或下载项目

### 2. 启动本地服务器

使用Python内置服务器：
```bash
python -m http.server 8000
```

或使用Node.js的http-server：
```bash
npx http-server -p 8000
```

### 3. 访问网站

在浏览器中输入：
```
http://localhost:8000
```

## 自定义内容

### 修改个人信息

在 `index.html` 文件中修改以下内容：
- 首页标题和介绍
- 关于我部分的个人信息
- 联系方式

### 添加/修改技能

在 `index.html` 文件的技能部分添加或修改技能项，每个技能项的结构如下：

```html
<div class="skill-item">
    <div class="skill-header" onclick="toggleSkill(this)">
        <div class="skill-icon">
            <i class="fab fa-html5"></i>
        </div>
        <h3>HTML5</h3>
        <i class="fas fa-chevron-down skill-toggle"></i>
    </div>
    <div class="skill-bar">
        <div class="skill-progress" style="width: 90%"></div>
    </div>
    <span class="skill-percentage">90%</span>
    <div class="skill-details">
        <!-- 技能详情内容 -->
    </div>
</div>
```

### 添加/修改项目

在 `index.html` 文件中修改项目部分的内容，并在 `script.js` 文件的 `openModal` 函数中添加对应的项目详情。

## 浏览器兼容性

- Chrome (推荐)
- Firefox
- Safari
- Edge

## 许可证

MIT License

## 作者

未知

---

感谢您访问我的个人网站！