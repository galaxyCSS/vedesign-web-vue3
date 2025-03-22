import { ref as u, onMounted as d, createElementBlock as a, openBlock as i, Fragment as m, renderList as _, normalizeClass as f, toDisplayString as v } from "vue";
const g = (t, e) => {
  const n = t.__vccOpts || t;
  for (const [l, s] of e)
    n[l] = s;
  return n;
}, x = { class: "ve-text-typing" }, h = /* @__PURE__ */ Object.assign({
  name: "VeTextTyping"
}, {
  __name: "index",
  props: {
    content: String,
    speed: {
      type: Number,
      default: 100
    }
  },
  setup(t) {
    const e = u([]), n = t, l = () => {
      let s = n.content.split(""), p = n.speed, o = 0, r = setInterval(() => {
        e.value.push(s[o]), o++, o === s.length && (e.value.push("_"), clearInterval(r));
      }, p);
    };
    return d(() => {
      l();
    }), (s, p) => (i(), a("div", x, [
      (i(!0), a(m, null, _(e.value, (o, r) => (i(), a("span", {
        class: f(["item", r === e.value.length - 1 ? "last" : ""])
      }, v(o), 3))), 256))
    ]));
  }
}), c = /* @__PURE__ */ g(h, [["__scopeId", "data-v-1d832e33"]]);
c.install = function(t) {
  return t.component(c.name, c), t;
};
const y = [c], T = function(t) {
  y.forEach((e) => {
    t.use(e);
  });
}, I = {
  install: T
};
export {
  c as TextTyping,
  I as default
};
