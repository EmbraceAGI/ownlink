import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: '7f0d072f02b94427b76008db03d74caa',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: ' Info Card | Gary Hou ',
  domain: 'garyhou2023.info',
  author: 'Gary Hou',

  // open graph metadata (optional)
  description: 'This is personal homepage for all of links',

  // social usernames (optional)
  twitter: 'garry02061',
  github: 'hougarry',
  linkedin: '',
  // mastodon: '#', // optional mastodon profile URL, provides link verification
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  navigationStyle: 'default'
  //navigationStyle: 'custom',
  //navigationLinks: [
  //{
  //title: 'About',
  //pageId: '3e44d98f03664f359741628c12b613e2'
  //},
  //{
  //title: 'Contact',
  //pageId: 'e96f73939bbb4bf5960ff510352269fe'
  //},
  //{
  //title: 'Contact',
  //pageId: '59005b9aeabf4af2b639d2a2ebeef6f7'
  //}
  //]
})
