import { defineConfig } from "vitepress";

export default defineConfig({
  title: `Notes`,
  description: "前端笔记文档",
  base: "/front-end-notes/",

  head: [
    // 网站图标
    ["link", { rel: "icon", type: "image/svg+xml", href: "logo.svg" }],
  ],
  appearance: true, // 默认 true，设为 false 则无法切换dark/light主题，可选 'dark' true false
  markdown: {
    lineNumbers: false, // 是否显示行数，默认false
  },
  themeConfig: {
    editLink: {
      pattern:
        "https://github.com/wet631/front-end-notes/tree/master/docs/:path",
      text: "Suggest changes to this page",
    },
    // 默认支持icon包括：'discord'|'facebook'|'github'|'instagram'|'linkedin'|'mastodon'|'slack'|'twitter'|'youtube'
    socialLinks: [
      { icon: "github", link: "https://github.com/wet631/front-end-notes" },
      // 自定义icon
      // {
      //   icon: {
      //     svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Dribbble</title><path d="M12...6.38z"/></svg>'
      //   },
      //   link: 'https://www.npmjs.com/package/front-end-notes'
      // }
    ],
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2023-present The Muse Catcher",
    },

    nav: [
      { text: "Vue3", link: "/Vue3/started", activeMatch: "/Vue3/" },
      { text: "Ts", link: "/Ts/started", activeMatch: "/Ts/" },
      { text: "Js", link: "/Js/started", activeMatch: "/Js/" },
      {
        text: "Project",
        items: [
          { text: "project-1", link: "/project/project-1/produce" },
          { text: "project-2", link: "/project/project-2/produce" },
        ],
      },
      { text: "diffic", link: "/diffic/started", activeMatch: "/diffic/" },
      // 连接
      {
        text: "links",
        items: [
          { text: "My Github", link: "https://github.com/wet631" },
          {
            items: [
              {
                text: "Vue 2 Docs",
                link: "https://v2.cn.vuejs.org/v2/guide/",
              },
              {
                text: "Vue 3 Docs",
                link: "https://cn.vuejs.org/guide/introduction.html",
              },
              {
                text: "npm",
                link: "https://www.npmjs.com/",
              },
              {
                text: "vite",
                link: "https://cn.vitejs.dev/",
              },
            ],
          },
        ],
      },
    ],

    sidebar: {
      "/Vue3/": [
        {
          text: "指引",
          items: [
            {
              text: "开始",
              link: "/Vue3/started",
            },
          ],
        },
        {
          text: "Vue3 Notes",
          items: [
            {
              text: "note-1",
              link: "/Vue3/components/note-1",
            },
            {
              text: "note-2",
              link: "/Vue3/components/note-2",
            },
          ],
        },
      ],
      "/Ts/": [
        {
          text: "指引",
          items: [
            {
              text: "开始",
              link: "/Ts/started",
            },
          ],
        },
        {
          text: "Ts Notes",
          items: [
            {
              text: "note-1",
              link: "/Ts/components/note-1",
            },
            {
              text: "note-2",
              link: "/Ts/components/note-2",
            },
          ],
        },
      ],
      "/project/": [
        {
          text: "项目",
          items: [
            {
              text: "开始",
              link: "/project/started",
            },
          ],
        },
        {
          text: "rabbit Notes",
          items: [
            {
              text: "首页搭建",
              link: "/project/project-1/rabbit-1",
            },
          ],
        },
      ],
      "/Js/": [
        {
          text: "指引",
          items: [
            {
              text: "开始",
              link: "/Js/started",
            },
          ],
        },
        {
          text: "Js Notes",
          items: [
            {
              text: "note-1",
              link: "/Js/components/note-1",
            },
            {
              text: "note-2",
              link: "/Js/components/note-2",
            },
          ],
        },
      ],
      "/diffic/": [
        {
          text: "难点",
          items: [
            {
              text: "开始",
              link: "/diffic/started",
            },
          ],
        },
        {
          text: "diffic Notes",
          items: [
            {
              text: "diffic-one",
              link: "/diffic/components/diffic-one",
            },
          ],
        },
      ],
    },
  },
});
