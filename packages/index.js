import components from "./component";
// 所有组件
export * from "./component";

// 完整引入组件
const install = function (app) {
  components.forEach((component) => {
    app.use(component);
  });
};

export default {
  install,
};
