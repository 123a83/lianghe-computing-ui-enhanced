# 量合-算力即未来 Next.js UI 增强版

<div align="center">

![量合Logo](https://img.shields.io/badge/量合-算力即未来-blue?style=for-the-badge)
![Next.js](https://img.shields.io/badge/Next.js-14.0-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react)
![CSS](https://img.shields.io/badge/CSS-Modules-1572B6?style=for-the-badge&logo=css3)

[🌐 在线演示](https://qginngejkpko.sealoshzh.site) | [📖 部署文档](./DEPLOYMENT.md) | [🐛 问题反馈](https://github.com/123a83/lianghe-computing-ui-enhanced/issues)

</div>

## 🆕 增强版更新内容

### ✨ 主要改进
- **优化充值入口设计** - 重新设计了充值按钮，增加了渐变动画和发光效果
- **充值文案优化** - 添加了"享受算力变现"的引导文字
- **标语背景增强** - 为Header标语添加了动态渐变背景，提升视觉效果
- **删除客服标志** - 移除了底部HomeIndicator组件，界面更加简洁

### 🎨 设计优化
- 充值按钮采用橙色系渐变，更加醒目
- 添加了充值中心标签，功能定位更清晰
- 按钮包含图标、主文字、副文字和箭头，信息层次分明
- Header背景使用流动渐变效果，科技感更强

这是一个基于原版量合算力UI的增强版本，专注于提升用户体验和界面美观度。

## 🚀 特性

- ✨ **现代化Next.js框架** - 基于Next.js 14，支持SSR和静态生成
- 📱 **移动端优先设计** - 375px标准宽度，完美适配iOS/Android
- 🎨 **炫酷科技感动画** - 渐变背景、动态图标、流光效果
- 🔥 **模块化组件架构** - 每个组件独立开发，易于维护
- 💎 **CSS Modules样式隔离** - 避免样式冲突，提升开发体验
- ⚡ **高性能优化** - 代码分割、懒加载、PWA支持

## 📱 界面预览

### 主要功能模块

- **用户信息栏** - 显示当前登录用户
- **通知中心** - 重要公告和提醒
- **数据中心** - 个人量值统计展示
- **量值记录** - 详细的量值变动历史
- **充值中心** - 优化后的量值充值入口

## 📁 项目结构

```
lianghe-computing-ui-enhanced/
├── components/              # React组件目录
│   ├── StatusBar.js        # 状态栏组件
│   ├── UserInfo.js         # 用户信息组件
│   ├── Header.js           # 头部组件
│   ├── Notification.js     # 通知组件
│   ├── StatsContainer.js   # 统计容器组件
│   ├── RecordsSection.js   # 记录列表组件
│   └── BottomButtons.js    # 底部按钮组件
├── pages/                  # Next.js页面目录
│   ├── _app.js            # App根组件
│   ├── _document.js       # HTML文档结构
│   └── index.js           # 首页
├── styles/                 # 样式文件目录
│   ├── globals.css        # 全局样式
│   ├── Home.module.css    # 首页模块样式
│   └── components/        # 组件样式目录
├── package.json           # 项目配置
├── next.config.js         # Next.js配置
├── README.md              # 项目说明
└── LICENSE                # MIT许可证
```

## 🛠️ 快速开始

### 环境要求

- Node.js 16.0+
- npm 7.0+ 或 yarn 1.22+

### 1. 克隆项目

```bash
git clone https://github.com/123a83/lianghe-computing-ui-enhanced.git
cd lianghe-computing-ui-enhanced
```

### 2. 安装依赖

```bash
npm install
# 或使用 yarn
yarn install
```

### 3. 开发运行

```bash
npm run dev
# 或使用 yarn
yarn dev
```

打开 [http://localhost:3000](http://localhost:3000) 查看应用。

### 4. 构建生产版本

```bash
npm run build
npm start
# 或使用 yarn
yarn build
yarn start
```

## 🎯 主要技术栈

- **[Next.js 14](https://nextjs.org/)** - React全栈框架
- **[React 18](https://reactjs.org/)** - 用户界面库
- **[CSS Modules](https://github.com/css-modules/css-modules)** - 模块化CSS
- **[Font Awesome 6](https://fontawesome.com/)** - 图标库

## 🚀 部署指南

### 快速部署到Vercel

1. Fork此仓库到你的GitHub账户
2. 在 [Vercel](https://vercel.com) 连接GitHub仓库
3. 一键部署，无需任何配置

### 部署到自定义服务器

```bash
# 构建项目
npm run build

# 启动生产服务器
npm start

# 或使用PM2管理进程
npm install -g pm2
pm2 start npm --name "lianghe-ui-enhanced" -- start
```

## 🤝 贡献指南

欢迎提交 Pull Request 和 Issue！

1. Fork 本仓库
2. 创建你的特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交你的修改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启一个 Pull Request

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情

## 🆘 技术支持

- **GitHub Issues**: [提交问题](https://github.com/123a83/lianghe-computing-ui-enhanced/issues)
- **项目维护者**: 量合团队
- **技术栈**: Next.js + React + CSS Modules

---

<div align="center">

**开发者**: 量合团队 | **技术支持**: Next.js + React | **UI设计**: 移动端科技风格

Made with ❤️ for 量合算力平台

</div>