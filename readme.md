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
    <img alt="Example" src="https://github.com/hougarry/ownlink/assets/52512824/d21467b7-0367-42f8-ac48-c179c63d9e44" width="400">
  </a>
</p>

# Build your ownlink through Next.js + Notion  --- Live Examples

[**Demo：**](https://ownlink-two.vercel.app/) Click here to see a Demo website

[**My webiste**](https://www.garyhou2023.info/) Click here to see my website

[![Deploy to Vercel](https://vercel.com/button)](https://vercel.com/import/project)

1. Deploy your ownlink in 1 minute, fork this repo and deploy it 
2. copy this notion template in your notion, get the notion page id like this : 
[Notion-template](https://twilight-stay-202.notion.site/Ownlink_Template-292e44db817d4cafb370287e59a63b93?pvs=4) 
id is 292e44db817d4cafb370287e59a63b93?pvs=4
3. Edit values in [site.config.ts](./site.config.ts) 📝, change Notion page id to yours, that's all of it, your have your ownlink now!

> The ultimate starter kit for Next.js and Notion integration.
> 

[![Build Badge](https://github.com/transitive-bullshit/nextjs-notion-starter-kit/actions/workflows/build.yml/badge.svg)](https://github.com/transitive-bullshit/nextjs-notion-starter-kit/actions/workflows/build.yml) [![Prettier Badge](https://img.shields.io/badge/code_style-prettier-brightgreen.svg)](https://prettier.io)

## Introduction


Fueling my personal blog and portfolio, this repository leverages the power of Notion as a CMS via [react-notion-x](https://github.com/NotionX/react-notion-x), [Next.js](https://nextjs.org/), and [Vercel](https://vercel.com).

## Capabilities

- Quick setup: edit just a [single config file](./site.config.ts) 🛠
- Deep integration with Notion via [react-notion-x](https://github.com/NotionX/react-notion-x)
- Tech stack: Next.js, TypeScript, React ⚙
- Performance and SEO optimized 🚀
- Auto-generated social images 🖼
- Clean URLs 🌐
- Dynamic TOCs 📚
- Dark mode support 🌒
- CMD+K / CMD+P for quick search 🔍
- Mobile responsive 📱


## Getting Started

**Configuration is handled in [site.config.ts](./site.config.ts).**

1. Fork or clone the repo 🍴
2. Edit values in [site.config.ts](./site.config.ts) 📝
3. `npm install` 📦
4. `npm run dev` for local testing 🖥
5. `npm run deploy` to push to Vercel 🚀

For the `rootNotionPageId`, use the last segment of your public Notion page URL. More instructions in the repo.

## URL Schemes

The app adopts distinct URL paths for development and production, although any dev path will work in prod and vice-versa.

- **Development**: URLs take the form `/nextjs-notion-blog-d1b5dcf8b9ff425b8aef5ce6f0730202`, a slugified title appended with the Notion ID. Helpful for quick ID reference.
  
- **Production**: URLs are cleaner, like `/nextjs-notion-blog`, omitting the ID.

URL mapping occurs automatically during the build. If you change titles, ensure that old links remain functional. Next.js [redirects](https://nextjs.org/docs/api-reference/next.config.js/redirects) can help, but we don't offer built-in detection of old links.

Refer to [mapPageUrl](./lib/map-page-url.ts) and [getCanonicalPageId](https://github.com/NotionX/react-notion-x/blob/master/packages/notion-utils/src/get-canonical-page-id.ts) for details.

Custom slugs can be defined using a `Slug` text property in your Notion database. 

⚠️ Duplicated slugs across pages will trigger an error.

## Image Optimization

<p align="center">
  <img alt="Example image" src="https://user-images.githubusercontent.com/552829/160142320-35343317-aa9e-4710-bcf7-67e5cdec586d.gif" width="458">
</p>

We employ [next/image](https://nextjs.org/docs/api-reference/next/image) along with optional [lqip-modern](https://github.com/transitive-bullshit/lqip-modern) for highly efficient images.

Preview images are on by default. To disable, set `isPreviewImageSupportEnabled` to `false` in `site.config.ts`.



### Redis Caching

For faster preview image loading, enable Redis caching by setting `isRedisEnabled` to `true` in `site.config.ts`. Define `REDIS_HOST` and `REDIS_PASSWORD` in a `.env` file.

```bash
REDIS_HOST='TODO'
REDIS_PASSWORD='TODO'
```

Recommended Redis provider: [Redis Labs](https://redis.com) (free plan available).

Preview images and Redis caching are optional; disable in config if unwanted.

### Custom Styling

CSS for Notion content is in [styles/notion.css](./styles/notion.css), targeting classes from react-notion-x [styles.css](https://github.com/NotionX/react-notion-x/blob/master/packages/react-notion-x/src/styles.css).

For specific Notion blocks:

```css
.notion-block-260baa77f1e1428b97fb14ac99c7c385 {
  display: none;
}
```

### Dark Theme

<p align="center">
  <img src="Light_Mode_URL" width="45%">
  &nbsp; &nbsp; &nbsp; &nbsp;
  <img src="Dark_Mode_URL" width="45%">
</p>

Dark mode toggle is available; click sun/moon icon in footer.
```
```

## Auto-Generated Social Images

<p align="center">
  <img alt="Sample social image" src="Image_URL" width="600">
</p>

Open Graph and social meta tags stem from your Notion content, ensuring polished social sharing. Social images are auto-created via [Vercel OG Image Generation](https://vercel.com/docs/concepts/functions/edge-functions/og-image-generation). Modify the default React template at [api/social-images.tsx](./pages/api/social-image.tsx).

View a live example [here](https://transitivebullsh.it/api/social-image?id=ID).

## Dynamic Table of Contents

<p align="center">
  <img alt="ToC Scrollspy demo" src="ToC_Image_URL" width="240">
</p>

Each article features a dynamic table of contents (`aside` on desktop) with scrollspy functionality. If an article has fewer than `minTableOfContentsItems` (default 3), the ToC is hidden. It's also hidden on index pages or small windows.

For implementation details, see [getPageTableOfContents](https://github.com/NotionX/react-notion-x/blob/master/packages/notion-utils/src/get-page-table-of-contents.ts).

## Mobile-Responsive Design

<p align="center">
  <img alt="Responsive article page" src="Responsive_Image_URL" width="300">
</p>

Pages adapt to various device sizes.

## Web Analytics Options

### Fathom

[Fathom](https://usefathom.com/ref/42TFOZ) is a Google Analytics alternative. To enable, add `NEXT_PUBLIC_FATHOM_ID` as an environment variable (production-only).

### PostHog

[PostHog](https://posthog.com/) offers an open-source alternative. Activate it by adding `NEXT_PUBLIC_POSTHOG_ID` as an environment variable (production-only).


## Environment Setup

For utilizing Redis, analytics, or any other services requiring environment variables, [configure them in your Vercel project](https://vercel.com/docs/concepts/projects/environment-variables).

To test Redis integration with GitHub Actions, update the [build action YAML](./.github/workflows/build.yml) to include `REDIS_HOST` and `REDIS_PASSWORD`. See this [branch example for reference](https://github.com/transitive-bullshit/nextjs-notion-starter-kit/blob/transitive-bullshit/.github/workflows/build.yml#L17-L21). These variables should also be added to your GitHub repo as [encrypted secrets](https://docs.github.com/en/actions/security-guides/encrypted-secrets).

## How to Contribute
Check out the contribution guide to join our list of amazing contributors.

