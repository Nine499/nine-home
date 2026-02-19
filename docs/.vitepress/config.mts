import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Nine 碎碎念",
  description: "想抱着女孩子睡觉",
  lang: "zh-CN",
  lastUpdated: true,
  cleanUrls: true,
  themeConfig: {
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
      level: [2, 4],
    },
    editLink: {
      pattern: "https://github.com/Nine499/nine-home/edit/main/docs/:path",
      text: "在 GitHub 上编辑此页面",
    },
    lastUpdated: {
      text: "最后更新于",
    },
  },
});
