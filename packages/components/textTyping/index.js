import TextTyping from "./src/index.vue";
TextTyping.install = function (app) {
  // 组件注册，按需引入
  app.component(TextTyping.name, TextTyping);
  return app;
};

export default TextTyping;
