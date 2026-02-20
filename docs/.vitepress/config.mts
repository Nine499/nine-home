import { defineConfig } from "vitepress";

// ====== 基础常量（避免硬编码）======
const SITE_TITLE = "Nine 碎碎念";
const SITE_DESC = "想抱着女孩子睡觉";
const SITE_URL = "https://www.010811.xyz";
const GITHUB_REPO = "https://github.com/Nine499/nine-home";
const GITHUB_PROFILE = "https://github.com/Nine499";

export default defineConfig({
  // ====== 站点级 ======
  title: SITE_TITLE,
  description: SITE_DESC,
  lang: "zh-CN",
  cleanUrls: true,
  lastUpdated: true,

  sitemap: {
    hostname: SITE_URL,
  },

  markdown: {
    image: {
      lazyLoading: true,
    },
  },

  // ====== 主题级 ======
  themeConfig: {
    nav: [
      { text: "主页", link: "/" },
      { text: "文章列表", link: "/post/post-list" },
    ],

    socialLinks: [{ icon: "github", link: GITHUB_PROFILE }],

    footer: {
      message: "Nine and AI",
    },

    outline: {
      label: "页面导航",
      level: [2, 4],
    },

    editLink: {
      pattern: `${GITHUB_REPO}/edit/main/docs/:path`,
      text: "在 GitHub 上编辑此页面",
    },

    lastUpdated: {
      text: "最后更新于",
    },

    search: {
      provider: "local",
    },

    // 深浅色切换文案
    darkModeSwitchLabel: "主题",
    lightModeSwitchTitle: "切换到浅色模式",
    darkModeSwitchTitle: "切换到深色模式",
  },
});
