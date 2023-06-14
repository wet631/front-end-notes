import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Front-end Notes",
  description: "前端笔记文档",
  base: '/front-end-notes/',
  
  head: [ // 网站图标
  ['link', { rel: 'icon', type: 'image/svg+xml', href: 'logo.svg' }],
  // ['link', { rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' }],
],

appearance: true, // 默认 true，设为 false 则无法切换dark/light主题，可选 'dark' true false
markdown: {
  lineNumbers: false // 是否显示行数，默认false
},

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    editLink: {
      pattern: 'https://github.com/wet631/front-end-notes/tree/master/docs/:path',
      text: 'Suggest changes to this page',
    },
     // 默认支持icon包括：'discord'|'facebook'|'github'|'instagram'|'linkedin'|'mastodon'|'slack'|'twitter'|'youtube'
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    // nav: [
    //   { text: 'Home', link: '/' },
    //   { text: 'Examples', link: '/markdown-examples' }
    // ],
    nav: [
      { text: 'Vue2', link: '/vue2/note-1', activeMatch: '/vue2/' },
      { text: 'Vue3', link: '/vue3/note-1', activeMatch: '/vue3/' },
      {
        text: 'links',
        items: [
          { text: 'My Github', link: 'https://github.com/wet631' },
          {
            items: [
              {
                text: 'Vue 2 Docs',
                link: 'https://v2.cn.vuejs.org/v2/guide/',
              },
              {
                text: 'Vue 3 Docs',
                link: 'https://cn.vuejs.org/guide/introduction.html',
              },
              {
                text: 'TypeScript Docs',
                link: 'https://www.tslang.cn/docs/home.html',
              },
              {
                text: 'MDN Web Docs',
                link: 'https://developer.mozilla.org/zh-CN/',
              }
            ]
          },
          {
            items: [
              {
                text: 'npm',
                link: 'https://www.npmjs.com/',
              },
              {
                text: 'vite',
                link: 'https://cn.vitejs.dev/',
              },
              {
                text: 'markdown',
                link: 'https://markdown.com.cn/',
              },
              {
                text: 'vitepress',
                link: 'https://vitepress.dev/',
              }
            ]
          }
        ]
      }
    ],
    sidebar: {
      '/vue2/': [
        {
          text: '指引',
          items: [
            {
              text: '开始',
              link: '/vue2/started'
            }
          ]
        },
        {
          text: 'Vue2',
          items: [
            {
              text: 'note-1',
              link: '/vue2/note-1'
            },
            {
              text: 'note-2',
              link: '/vue2/note-2'
            }
          ]
        }
      ],
      '/vue3/': [
        {
          text: '指引',
          items: [
            {
              text: '开始',
              link: '/vue3/started'
            }
          ]
        },
        {
          text: 'Vue3',
          items: [
            {
              text: 'note-1',
              link: '/vue3/note-1'
            },
            {
              text: 'note-2',
              link: '/vue3/note-2'
            },
          ]
        }
      ]
    }
  }
})
