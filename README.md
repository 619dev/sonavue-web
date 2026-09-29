# sonavue

sonavue AI 音乐频道的静态品牌网站。使用原生 HTML、CSS、JavaScript，无框架、无第三方运行依赖。

## 本地预览

需要 Node.js 20 或更新版本，无需安装依赖。

```sh
npm run dev
```

打开 http://127.0.0.1:5173 。也可以直接在浏览器打开 `index.html`。

## 构建与导出

```sh
npm run build
```

完整网站输出到 `dist/`，可部署到任意静态托管平台。构建仅复制公开页面与资源，不包含项目脚本或源码管理文件。

## Vercel 部署

将项目推送到 Git 仓库，在 Vercel 中导入。仓库中的 `vercel.json` 已配置：

- Framework Preset：Other
- Build Command：`npm run build`
- Output Directory：`dist`
- 无环境变量、数据库或服务端配置

也可以在已配置 Vercel CLI 的环境中，从项目根目录执行 `vercel --prod`。

当前交付已生成本地静态产物，未发布线上部署。

## 内容维护

- `index.html`：页面文案、导航、频道链接和 SEO 元数据。
- `styles.css`：配色、布局、动效和手机适配。
- `app.js`：场景介绍切换、键盘导航和暂停动效按钮，以及中英文文案、语言和主题设置。
- `logo.png`：用户提供的原始 Logo，保持原图。
- `favicon.svg`：轻量 S 图标。

频道地址为 https://www.youtube.com/@sonavue_channel 。更换地址时修改 `index.html` 的频道链接。

“夜色漫游 / 心流时刻 / 放空宇宙”为聆听场景介绍，不是曲目或音频播放器。未添加未经提供的歌曲、播放量或更新频率。

## 资源与访问

样式、脚本、Logo 与图标全部本地加载；使用系统中文字体。页面没有 Google Fonts、海外 CSS CDN、YouTube iframe 或第三方统计请求。点击频道按钮后才会跳转 YouTube，目标网站的可访问性取决于访客网络。Vercel 部署域名在中国大陆的实际可达性取决于网络和域名配置。

支持手机与桌面布局、键盘场景切换、可见焦点、跳转正文入口和系统减少动态效果偏好。

## 语言与主题

页头的 EN / 中文按钮用于切换语言，太阳 / 月亮按钮用于切换亮色与暗色配色。首次访问按浏览器语言（中文使用中文，其余使用英文）和系统主题初始化；手动选择后使用 localStorage 保存，下次访问优先采用保存的设置。未手动选择主题时会继续跟随系统主题变化。存储不可用时仍可在当前页面正常切换。

翻译集中在 `app.js` 的 `translations` 和 `englishMoods` 中。语言切换同步更新页面标题、描述、图片说明和无障碍标签，保持当前选中的聆听场景。亮色样式位于 `styles.css` 的 `[data-color-theme=light]` 规则中。HTML 头部的小脚本在样式加载前确定主题，减少主题闪烁。
