---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

title: Front-end Notes
titleTemplate: Library


hero:
  name: "Front-end Notes"
  text: ""
  tagline: 前端笔记文档
  actions:
    - theme: brand
      text: Get Started
      link: /guide/started
    - theme: alt
      text: View on GitHub
      link: https://github.com/wet631/front-end-notes.git

features:
  - title: Feature A
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - title: Feature B
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - title: Feature C
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
---
<script setup lang="ts">
import { onMounted } from 'vue'
import { fetchVersion } from './.vitepress/utils/fetchVersion'

onMounted(() => {
  fetchVersion()
})
</script>


