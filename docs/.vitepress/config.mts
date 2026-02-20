import { defineConfig } from "vitepress";

/**
 * ==============================
 * 基础常量区（避免硬编码）
 * ==============================
 *
 * 说明：
 * 1) 将站点信息提取为常量，避免字符串散落在配置对象中，提升可维护性。
 * 2) 当站点迁移、改名、换仓库时，只需修改常量，不用全局检索替换。
 * 3) 常量命名全部大写 + 下划线，明确表示“运行期不会变化”的配置值。
 */

/** 站点主标题：显示在浏览器标题栏、页面头部等位置 */
const SITE_TITLE = "Nine 碎碎念";

/** 站点描述：用于 SEO 元信息（meta description）与部分主题展示 */
const SITE_DESC = "想抱着女孩子睡觉";

/** 站点线上访问地址：用于 sitemap 生成时拼接完整 URL */
const SITE_URL = "https://www.010811.xyz";

/** GitHub 仓库地址：用于“编辑此页”跳转 */
const GITHUB_REPO = "https://github.com/Nine499/nine-home";

/** GitHub 个人主页：用于社交链接（右上角 GitHub 图标） */
const GITHUB_PROFILE = "https://github.com/Nine499";

/**
 * defineConfig：
 * - VitePress 官方推荐的配置包装函数
 * - 提供更好的类型提示与配置校验
 * - 便于在 TS/JS 环境下获得 IDE 自动补全
 */
export default defineConfig({
  /**
   * ==============================
   * 站点级配置（全局行为）
   * ==============================
   */

  /** 站点标题（全局） */
  title: SITE_TITLE,

  /** 站点描述（全局） */
  description: SITE_DESC,

  /** 站点语言：zh-CN 影响 HTML lang 属性与部分语义化场景 */
  lang: "zh-CN",

  /**
   * cleanUrls:
   * - 启用后，URL 会更“干净”（通常不带 .html 后缀）
   * - 有利于可读性与分享链接美观
   */
  cleanUrls: true,

  /**
   * lastUpdated:
   * - 开启页面“最后更新时间”能力
   * - 依赖 Git 提交记录（通常由主题中的 lastUpdated 文案控制显示文本）
   */
  lastUpdated: true,

  /**
   * sitemap:
   * - 站点地图配置，用于搜索引擎抓取
   * - hostname 为生成绝对链接的基准域名
   */
  sitemap: {
    hostname: SITE_URL,
  },

  /**
   * markdown:
   * - Markdown 渲染层配置
   * - 这里只配置了图片懒加载，优化首屏加载性能
   */
  markdown: {
    image: {
      /**
       * lazyLoading:
       * - 为图片启用原生懒加载（loading="lazy"）
       * - 页面首次渲染时只优先加载视口附近图片，降低初始资源压力
       */
      lazyLoading: true,
    },
  },

  /**
   * ==============================
   * 主题级配置（展示与交互）
   * ==============================
   */
  themeConfig: {
    /**
     * nav（顶部导航）：
     * - 定义页面顶部可见的主导航入口
     * - text 为显示文案，link 为路由路径
     */
    nav: [
      { text: "主页", link: "/" },
      { text: "文章列表", link: "/post/post-list" },
    ],

    /**
     * socialLinks（社交链接）：
     * - 通常显示在导航栏右侧（依主题而定）
     * - icon 使用内置图标关键字，link 为跳转地址
     */
    socialLinks: [{ icon: "github", link: GITHUB_PROFILE }],

    /**
     * footer（页脚配置）：
     * - message：页脚文案，常用于版权、签名或标语
     */
    footer: {
      message: "Nine and AI",
    },

    /**
     * outline（页面右侧目录）：
     * - 基于 Markdown 标题自动生成“页面内导航”
     * - level: [2, 4] 表示提取 h2 ~ h4 作为目录项
     */
    outline: {
      label: "页面导航",
      level: [2, 4],
    },

    /**
     * editLink（编辑链接）：
     * - 在页面底部提供“编辑此页”入口
     * - :path 会被替换为当前文档在 docs 目录下的相对路径
     * - 便于快速跳转到 GitHub 对应文件进行修改
     */
    editLink: {
      pattern: `${GITHUB_REPO}/edit/main/docs/:path`,
      text: "在 GitHub 上编辑此页面",
    },

    /**
     * lastUpdated（最后更新时间文案）：
     * - 与根级 lastUpdated: true 配合使用
     * - 这里仅定义 UI 展示文本
     */
    lastUpdated: {
      text: "最后更新于",
    },

    /**
     * search（搜索）：
     * - provider: "local" 使用本地搜索（无需第三方搜索服务）
     * - 适合中小型文档站，部署简单、零外部依赖
     */
    search: {
      provider: "local",
    },

    /**
     * 深浅色主题切换文案：
     * - darkModeSwitchLabel：切换控件标签文本
     * - lightModeSwitchTitle：切到浅色模式时的提示文本
     * - darkModeSwitchTitle：切到深色模式时的提示文本
     */
    darkModeSwitchLabel: "主题",
    lightModeSwitchTitle: "切换到浅色模式",
    darkModeSwitchTitle: "切换到深色模式",
  },
});
