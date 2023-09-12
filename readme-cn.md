```html
<h1 align="center">
<span>Notion搭建个人link</span>
</h1>
<p align="center">
    中文 | <a href="./README-CN.md">English</a> 
</p>
<p align="center">
    <em>

<p align="center">
  <a href="https://github.com/hougarry/ownlink">
    <img alt="示例" src="https://github.com/hougarry/ownlink/assets/52512824/d21467b7-0367-42f8-ac48-c179c63d9e44" width="400">
  </a>
</p>

# 通过 Next.js + Notionpage 构建个人专属link 
---

[**演示：**](https://ownlink-two.vercel.app/) 点击此处查看演示网站

[**我的网站**](https://www.garyhou2023.info/) 点击此处查看我的网站

[![部署到 Vercel](https://vercel.com/button)](https://vercel.com/import/project)

1. 在1分钟内部署您自己的link，fork此repo并在VPS上，或者Vercel部署它

2. 复制此 Notion 模板到您的 Notion 中，获取 Notion 页面的页面 ID，如下所示：

[Notion 模板](https://twilight-stay-202.notion.site/Ownlink_Template-292e44db817d4cafb370287e59a63b93?pvs=4)
id 为292e44db817d4cafb370287e59a63b93?pvs=4中的292e44db817d4cafb370287e59a63b93

3. 在 [site.config.ts](./site.config.ts) 📝 中把将 Notion 页面 ID 更改自己的id，拥有自己的link！

> Next.js 和 Notion 集成的终极入门套件。
> 

[![构建徽章](https://github.com/transitive-bullshit/nextjs-notion-starter-kit/actions/workflows/build.yml/badge.svg)](https://github.com/transitive-bullshit/nextjs-notion-starter-kit/actions/workflows/build.yml) [![Prettier 徽章](https://img.shields.io/badge/code_style-prettier-brightgreen.svg)](https://prettier.io)

## 介绍

通过 [react-notion-x](https://github.com/NotionX/react-notion-x)、[Next.js](https://nextjs.org/) 和 [Vercel](https://vercel.com) 利用 Notion 作为 CMS 的强大功能，为我的个人博客和作品集提供支持。

## 功能

- 快速设置：仅需编辑 [single config file](./site.config.ts) 🛠
- 通过 [react-notion-x](https://github.com/NotionX/react-notion-x) 深度集成 Notion
- 技术栈：Next.js、TypeScript、React ⚙
- 性能和 SEO 优化 🚀
- 自动生成社交图像 🖼
- 干净的 URL 🌐
- 动态目录 📚
- 深色模式支持 🌒
- 用于快速搜索的 CMD+K / CMD+P 🔍
- 移动响应式 📱

## 入门指南

**配置在 [site.config.ts](./site.config.ts) 中处理。**

1. fork 或者clone 这个repo🍴
2. 编辑 [site.config.ts](./site.config.ts) 中的值 📝
3. `npm install` 📦
4. 本地测试使用 `npm run dev` 🖥
5. 推送到 Vercel 使用 `npm run deploy` 🚀

对于 `rootNotionPageId`，请使用您公共 Notion 页面 URL 的最后一部分。有关更多说明，请参阅存储库中的说明。

## URL 方案

该应用程序采用开发和生产的不同 URL 路径，尽管任何 dev 路径都适用于 prod，反之亦然。

- **开发**：URL 的形式是 `/nextjs-notion-blog-d1b5dcf8b9ff425b8aef5ce6f0730202`，附加了 Notion ID 的短横线分隔标题。对于快速 ID 引用很有帮助。
  
- **生产**：URL 更干净，像 `/nextjs-notion-blog`，省略了 ID。

URL 映射在构建期间自动发生。如果更改标题，请确保旧链接保持可用。Next.js [redirects](https://nextjs.org/docs/api-reference/next.config.js/redirects) 可以帮助，但我们不提供内置的旧链接检测。

有关详细信息，请参阅 [mapPageUrl](./lib/map-page-url.ts) 和 [getCanonicalPageId](https://github.com/NotionX/react-notion-x/blob/master/packages/notion-utils/src/get-canonical-page-id.ts)。

可以使用 Notion 数据库中的 `Slug` 文本属性定义自定义的短横线分隔标题。

⚠️ 页面之间重复的标题将触发错误。

## 图像优化

<p align="center">
  <img alt="示例图像" src="https://user-images.githubusercontent.com/552829/160142320-35343317-aa9e-4710-bcf7-67e5cdec586d.gif" width="458">
</p>

我们使用 [next/image](https://nextjs.org/docs/api-reference/next/image) 以及可选的 [lqip-modern](https://github.com/transitive-bullshit/lqip-modern) 来实现高效的图像处理。

默认情况下启用了预览图像。要禁用，请在 `site.config.ts` 中将 `isPreviewImageSupportEnabled` 设置为 `false`。

### Redis 缓存

为了更快地加载预览图像，可以在 `site.config.ts` 中将 `isRedisEnabled` 设置为 `true` 以启用 Redis 缓存。在 `.env` 文件中定义 `REDIS_HOST` 和 `REDIS_PASSWORD`。

```bash
REDIS_HOST='TODO'
REDIS_PASSWORD='TODO'
```

推荐的 Redis 提供者：[Redis Labs](https

://redis.com)（提供免费计划）。

预览图像和 Redis 缓存是可选的；如果不需要，请在配置中禁用。

### 自定义样式

Notion 内容的 CSS 在 [styles/notion.css](./styles/notion.css) 中，针对来自 react-notion-x [styles.css](https://github.com/NotionX/react-notion-x/blob/master/packages/react-notion-x/src/styles.css) 的类。

对于特定的 Notion 区块：

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

可以切换深色模式；在页脚中点击太阳/月亮图标。
```
```

## 自动生成社交图像

<p align="center">
  <img alt="示例社交图像" src="Image_URL" width="600">
</p>

Open Graph 和社交媒体元标签来自您的 Notion 内容，确保社交分享时有完美的展示效果。社交图像通过 [Vercel OG Image Generation](https://vercel.com/docs/concepts/functions/edge-functions/og-image-generation) 自动创建。您可以在 [api/social-images.tsx](./pages/api/social-image.tsx) 中修改默认的 React 模板。

查看实时示例 [here](https://transitivebullsh.it/api/social-image?id=ID)。

## 动态目录

<p align="center">
  <img alt="ToC Scrollspy 演示" src="ToC_Image_URL" width="240">
</p>

每篇文章都包含一个动态目录（在桌面上是 `aside`）以及滚动监听功能。如果文章少于 `minTableOfContentsItems`（默认为 3），则会隐藏目录。在索引页面或小窗口上也会隐藏它。

有关实施详细信息，请参阅 [getPageTableOfContents](https://github.com/NotionX/react-notion-x/blob/master/packages/notion-utils/src/get-page-table-of-contents.ts)。

## 移动响应式设计

<p align="center">
  <img alt="响应式文章页面" src="Responsive_Image_URL" width="300">
</p>

页面适应各种设备大小。

## Web 分析选项

### Fathom

[Fathom](https://usefathom.com/ref/42TFOZ) 是 Google Analytics 的替代方案。要启用，请将 `NEXT_PUBLIC_FATHOM_ID` 添加为环境变量（仅在生产环境中）。

### PostHog

[PostHog](https://posthog.com/) 提供了一个开源替代方案。通过将 `NEXT_PUBLIC_POSTHOG_ID` 添加为环境变量（仅在生产环境中）来激活它。


## 环境设置

对于利用 Redis、分析或任何需要环境变量的其他服务，[在您的 Vercel 项目中进行配置](https://vercel.com/docs/concepts/projects/environment-variables)。

要使用 GitHub Actions 测试 Redis 集成，请更新 [build action YAML](./.github/workflows/build.yml) 以包括 `REDIS_HOST` 和 `REDIS_PASSWORD`。请参考此 [分支示例以供参考](https://github.com/transitive-bullshit/nextjs-notion-starter-kit/blob/transitive-bullshit/.github/workflows/build.yml#L17-L21)。这些变量还应该添加到您的 GitHub 存储库中作为 [加密的秘密](https://docs.github.com/en/actions/security-guides/encrypted-secrets)。

## 如何贡献
查看贡献指南以加入我们的出色贡献者列表。
```

请注意，您可能需要将一些链接和图像的占位符（如 "Image_URL"、"ToC_Image_URL"、"Responsive_Image_URL"、"Light_Mode_URL"、"Dark_Mode_URL"）替换为实际的链接和图像 URL。
