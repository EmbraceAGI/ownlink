<h1 align="center">
<span>一分钟内搭建个人link</span>
</h1>
<p align="center">
    中文 | <a href="./README-CN.md">英文</a> 
</p>
<p align="center">
    <em>
</p>

<p align="center">
  <a href="https://github.com/hougarry/ownlink">
    <img alt="示例" src="https://github.com/hougarry/ownlink/assets/52512824/d21467b7-0367-42f8-ac48-c179c63d9e44" width="400">
  </a>
</p>

# 使用 Next.js + Notion 构建你自己的链接 --- 示例网站

[**演示：**](https://ownlink-two.vercel.app/) 点击此处查看演示网站

[**我的网站**](https://www.garyhou2023.info/) 点击此处查看我的网站

[![部署到 Vercel](https://vercel.com/button)](https://vercel.com/import/project)

1. 在1分钟内部署你自己的链接，复制这个仓库并进行部署
2. 在你的Notion中复制这个模板，获取Notion页面ID，如下所示： [Notion 模板](https://twilight-stay-202.notion.site/Ownlink_Template-292e44db817d4cafb370287e59a63b93?pvs=4) ID 为 292e44db817d4cafb370287e59a63b93?pvs=4
3. 在 [site.config.ts](./site.config.ts) 中编辑值 📝，将Notion页面ID更改为你的ID，就这样，你现在有了自己的链接！

> Next.js 和 Notion 集成的终极入门套件。
> 

[![构建徽章](https://github.com/transitive-bullshit/nextjs-notion-starter-kit/actions/workflows/build.yml/badge.svg)](https://github.com/transitive-bullshit/nextjs-notion-starter-kit/actions/workflows/build.yml) [![Prettier 徽章](https://img.shields.io/badge/code_style-prettier-brightgreen.svg)](https://prettier.io)

## 简介


通过 [react-notion-x](https://github.com/NotionX/react-notion-x)、[Next.js](https://nextjs.org/) 和 [Vercel](https://vercel.com)，这个仓库集合了我的个人博客和作品集。

## 功能

- 快速设置：只需编辑一个 [配置文件](./site.config.ts) 🛠
- 通过 [react-notion-x](https://github.com/NotionX/react-notion-x) 深度集成 Notion
- 技术栈：Next.js、TypeScript、React ⚙
- 性能和SEO优化 🚀
- 自动生成社交图像 🖼
- 干净的URL 🌐
- 动态目录 📚
- 深色模式支持 🌒
- 用于快速搜索的CMD+K / CMD+P 🔍
- 移动响应式 📱

## 入门

**配置在 [site.config.ts](./site.config.ts) 中处理。**

1. 复制或克隆这个仓库 🍴
2. 编辑 [site.config.ts](./site.config.ts) 中的值 📝
3. 运行 `npm install` 📦
4. 用于本地测试的 `npm run dev` 🖥
5. 用于推送到 Vercel 的 `npm run deploy` 🚀

对于 `rootNotionPageId`，使用你的公共 Notion 页面 URL 的最后一部分。更多说明在仓库中。

## URL 方案

该应用程序在开发和生产中采用不同的URL路径，尽管任何开发路径都可以在生产中使用，反之亦然。

- **开发**：URL采用 `/nextjs-notion-blog-d1b5dcf8b9ff425b8aef5ce6f0730202` 的形式，是一个附加了Notion ID的slugified标题，对于快速ID引用非常有用。
  
- **生产**：URL更干净，如 `/nextjs-notion-blog`，省略了ID。

URL映射在构建期间自动发生。如果更改标题，请确保旧链接仍然可用。Next.js 的 [重定向](https://nextjs.org/docs/api-reference/next.config

.js/redirects) 可以帮助，但我们不提供内置的旧链接检测。

有关详细信息，请参阅 [mapPageUrl](./lib/map-page-url.ts) 和 [getCanonicalPageId](https://github.com/NotionX/react-notion-x/blob/master/packages/notion-utils/src/get-canonical-page-id.ts)。

可以使用Notion数据库中的`Slug`文本属性定义自定义slug。

⚠️ 跨页面重复的slug会触发错误。

## 图像优化

<p align="center">
  <img alt="示例图像" src="https://user-images.githubusercontent.com/552829/160142320-35343317-aa9e-4710-bcf7-67e5cdec586d.gif" width="458">
</p>

我们使用 [next/image](https://nextjs.org/docs/api-reference/next/image) 以及可选的 [lqip-modern](https://github.com/transitive-bullshit/lqip-modern) 来实现高效的图像。

默认情况下启用预览图像。要禁用，请在 `site.config.ts` 中将 `isPreviewImageSupportEnabled` 设置为 `false`。



### Redis 缓存

为了更快地加载预览图像，请在 `site.config.ts` 中将 `isRedisEnabled` 设置为 `true` 以启用Redis缓存。在 `.env` 文件中定义 `REDIS_HOST` 和 `REDIS_PASSWORD`。


REDIS_HOST='TODO'
REDIS_PASSWORD='TODO'


推荐的Redis提供商：[Redis Labs](https://redis.com)（提供免费计划）。

预览图像和Redis缓存是可选的；如果不需要，请在配置中禁用。

### 自定义样式

用于Notion内容的CSS位于 [styles/notion.css](./styles/notion.css)，目标是来自 [react-notion-x](https://github.com/NotionX/react-notion-x) 的 [styles.css](https://github.com/NotionX/react-notion-x/blob/master/packages/react-notion-x/src/styles.css) 中的类。

对于特定的Notion块：

```css
.notion-block-260baa77f1e1428b97fb14ac99c7c385 {
  display: none;
}
```

### 深色主题

<p align="center">
  <img src="Light_Mode_URL" width="45%">
  &nbsp; &nbsp; &nbsp; &nbsp;
  <img src="Dark_Mode_URL" width="45%">
</p>

支持深色模式；点击页脚中的太阳/月亮图标。
```

以上是您提供的文本的中文翻译版本。您可以将这个翻译文本复制并粘贴到您的 GitHub readme 文件中。如果需要进一步的修改或有其他问题，请随时告诉我。
