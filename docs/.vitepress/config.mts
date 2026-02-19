import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Nine 碎碎念",
  description: "想抱着女孩子睡觉",
  lang: "zh-CN",
  cleanUrls: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "主页", link: "/" },
      { text: "文章列表", link: "/post/post-list" },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/Nine499" }],
    footer: {
      message: "Nine and AI",
    },
    outline: {
      label: "页面导航",
    },
  },
});
