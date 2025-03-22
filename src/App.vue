<template>
  <div class="ve-app">
    <ve-textTyping
      :speed="50"
      content="学会利用相对单位（例如百分比，vh或是vw），而不是只会用px一类固定单位设计布局，前言中提到的收缩后多出一大块空白，就是由于写死了宽度，例如1000px或是89vw，那么当侧边栏进行收缩，右边内容宽度还是只有89个vw，因此我们可以将其更改为100%，这样不论侧边栏是否收缩，内容都会占满屏幕的全部"
    ></ve-textTyping>
  </div>
</template>
