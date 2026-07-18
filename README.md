# Zeta 战队官网

![GitHub last commit](https://img.shields.io/github/last-commit/Hurk1n/ZetaTeam)
![GitHub repo size](https://img.shields.io/github/repo-size/Hurk1n/ZetaTeam)
![GitHub language count](https://img.shields.io/github/languages/count/Hurk1n/ZetaTeam)
![Static Badge](https://img.shields.io/badge/stack-HTML%20%2F%20CSS%20%2F%20JS-black)

杭州电子科技大学信息工程学院 · Zeta战队官网源码。

仓库地址：https://github.com/Hurk1n/ZetaTeam

## About

> 本项目为 **纯静态站点**（HTML + CSS + 原生 JavaScript）
>
> 无构建、无 Node 运行时依赖，可直接用任意静态托管部署
>
> 页面包含：Home / About / Members / Awards / Join

## 本地预览

在项目根目录执行：

```bash
python -m http.server 5173 --directory .
```

浏览器打开：http://127.0.0.1:5173/

也可直接打开 `index.html`（部分浏览器对本地脚本有限制，优先使用本地 HTTP）。

## 维护提示

### 日常只改 `js/data.js`

成员、奖项、权益与 QQ 群号等运营数据都集中在：

`js/data.js`


#### 增加 / 修改成员

在 `members` 数组中按以下格式新增或编辑：

```js
{
  name: "Alpha",                 // 展示昵称
  direction: "Web",              // Web / Pwn / Reverse / Crypto / Misc
  bio: "Web 安全 / 代码审计",
  blog: "https://blog.example.com", // 无博客填 "#" 或 ""
  avatar: ""                     // 图床 URL 或 "public/xxx.jpg"；留空显示 name 首字母
}
```

筛选标签来自 `directions` 数组：

```js
directions: ["All", "Web", "Pwn", "Reverse", "Crypto", "Misc"]
```

#### 增加 / 修改奖项

在 `awards` 数组中按以下格式新增：

```js
{
  year: "2026",
  title: "赛事名称",
  place: "一等奖",
  note: "",          // 可选备注
  top: true          // true 时名次高亮
}
```

#### 修改 Join 页权益

在 `benefits` 数组中按以下格式编辑：

```js
{
  title: "竞赛与学分",
  desc: "说明文字……"
}
```

### 替换静态资源

| 文件 | 说明 |
|------|------|
| `public/zeta-logo.jpg` | 队标 / Favicon |
| `public/zeta-wechat-qr.jpg` | 微信公众号二维码 |

页面文案、布局与招新说明等，直接编辑 `index.html`。

样式在 `css/style.css`，交互渲染在 `js/main.js`。

---

> 部署时不必上传 `tmp/`、`output/` 等中间目录。

# 项目结构

```
.
├── css
│   └── style.css          # 黑白极简样式与响应式
├── js
│   ├── data.js            # 成员 / 奖项 / 权益 / 联系方式（日常只改这里）
│   └── main.js            # 列表渲染、筛选、导航
├── public
│   ├── zeta-logo.jpg      # 队标
│   └── zeta-wechat-qr.jpg # 公众号二维码
├── index.html             # 单页：Home / About / Members / Awards / Join
└── README.md
```

## 目录说明

### public

网站可直接访问的静态资源目录。队标、二维码等未处理图片放在这里。

### css

站点样式。采用流体宽度、多断点适配桌面 / 平板 / 手机。

### js

- `data.js`：运营数据配置，渲染层只读此文件
- `main.js`：Members / Awards / Benefits 渲染，筛选与导航交互

### index.html

整站单页结构。About 正文、导航、页脚与联系卡片文案在此维护。

## 部署

将项目根目录上传到任意静态托管即可，例如：

- Nginx：`root` 指向本目录
- GitHub Pages / Cloudflare Pages / 对象存储静态网站：直接挂载

无需 `npm install`，无需额外常驻进程。

若使用 GitHub Pages，可在仓库 Settings → Pages 中选择分支与根目录 `/`。

# 其他

## VCS

本项目使用 Git 进行版本管理。可在 repository 查看提交历史与可用版本。

## License

如无另行声明，源码仅供学习与战队站点部署参考。
