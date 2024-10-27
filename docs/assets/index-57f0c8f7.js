(function () {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) i(o);
  new MutationObserver((o) => {
    for (const l of o)
      if (l.type === "childList")
        for (const c of l.addedNodes)
          c.tagName === "LINK" && c.rel === "modulepreload" && i(c);
  }).observe(document, { childList: !0, subtree: !0 });
  function u(o) {
    const l = {};
    return (
      o.integrity && (l.integrity = o.integrity),
      o.referrerPolicy && (l.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials"
        ? (l.credentials = "include")
        : o.crossOrigin === "anonymous"
        ? (l.credentials = "omit")
        : (l.credentials = "same-origin"),
      l
    );
  }
  function i(o) {
    if (o.ep) return;
    o.ep = !0;
    const l = u(o);
    fetch(o.href, l);
  }
})();
const f = {},
  x = {},
  b = {},
  w = {},
  v = { before: [], after: [] },
  k = {
    before({ commit: t }) {
      t();
    },
    after({}) {},
  },
  S = {};
function L() {
  xtyle.theme.set({
    theme: {
      none: "transparent",
      white: "white",
      black: "black",
      light: "#fff",
      dark: "#424242",
      context: "#616161",
      success: "#4CAF50",
      danger: "#F44336",
      warning: "#ff9800",
      info: "#2196F3",
      one: "#ba68c8",
      two: "#42a5f5",
    },
    dark: {
      context: "#a5a5a5",
      success: "#0f5132",
      danger: "#B71C1C",
      warning: "#ff9800",
      info: "#2196F3",
      one: "#6a1b9a",
      two: "#1565C0",
    },
  });
}
const M = "plugin_one__About",
  { Grid: a } = xtylist,
  P = [
    {
      category: "Languages",
      items: [
        "Python",
        "JavaScript",
        "HTML",
        "CSS",
        "TypeScript",
        "SQL",
        "Bash",
      ],
    },
    {
      category: "Frameworks",
      items: [
        "Django",
        "Flask",
        "FastAPI",
        "Node.js",
        "Preact",
        "React",
        "Vue.js",
      ],
    },
    {
      category: "Databases",
      items: ["MySQL", "PostgreSQL", "MongoDB", "SQLite", "Redis"],
    },
    { category: "Cloud", items: ["AWS", "Docker", "Azure", "Google Cloud"] },
  ];
function g(t) {
  return h(
    "div",
    { "x-html": !0, ...t, class: [M, t.class] },
    h(
      a,
      { row: !0, "gap-x": "2", "gap-y": "2", class: "my-2 mx-4" },
      h(
        a,
        { cols: "12", lg: "6", xl: "6" },
        h(
          "div",
          { class: "ta-c" },
          h("span", { class: "ts-2 td-b" }, "About Me")
        ),
        h(
          "div",
          {
            "x-html": !0,
            "theme-color": "white",
            class: "pa-5 br-2 sb-8 e-ns zoom-hover mt-2",
          },
          h(
            "p",
            { class: "ts-4 text py-2 px-3" },
            "I'm a seasoned Full-Stack Developer with a passion for building dynamic and responsive web applications. With over 8 years of experience in the tech industry, I've honed my skills in both front-end and back-end development, creating seamless and efficient digital experiences. I specialize in",
            " ",
            h("strong", null, "Python"),
            " and",
            h("strong", null, " JavaScript/TypeScript"),
            ", and have a proven track record of delivering high-quality projects on time and within budget. My expertise extends to designing and implementing",
            " ",
            h(
              "strong",
              null,
              "RESTful APIs, managing databases, and optimizing performance to ensure scalability and reliability"
            ),
            ". My journey in tech has been driven by a desire to solve complex problems and innovate. Whether it's developing a new feature, refactoring existing code, or collaborating with cross-functional teams, I bring a proactive and solution-oriented mindset to every project. Beyond coding, I'm an advocate for clean code practices and continuous learning."
          )
        )
      ),
      h(
        a,
        { cols: "12", lg: "6", xl: "6" },
        h(
          "div",
          { class: "skills-section" },
          h(
            "div",
            { class: "ta-c" },
            h("span", { class: "ts-2 td-b" }, "Skills")
          ),
          h(
            "table",
            { class: "skills-table mt-2 ts-4 sb-8 br-2 e-ns zoom-hover" },
            h(
              "thead",
              null,
              h("tr", null, h("th", null, "Category"), h("th", null, "Skills"))
            ),
            h(
              "tbody",
              null,
              P.map((e) =>
                h(
                  "tr",
                  { key: e.category },
                  h("td", { class: "td-b" }, e.category),
                  h("td", null, e.items.join(", "))
                )
              )
            )
          )
        )
      )
    )
  );
}
const A = "./me.png",
  _ = "plugin_one__Intro",
  { Button: C, Grid: d } = xtylist;
function m(t) {
  const e = "oy-h ox-h d-f dy-ce dx-ce eh-100p";
  return h(
    "div",
    { "x-html": !0, ...t, class: [_, t.class, e] },
    h(
      "div",
      { class: "d-f dx-ce dy-ce" },
      h(
        d,
        { row: !0, "gap-x": "2", "gap-y": "2", class: "my-2 mx-4" },
        h(
          d,
          { cols: "12", lg: "6", xl: "6", class: "d-f dy-ce dx-ce" },
          h(
            "div",
            { class: "d-f df-col" },
            h("div", { class: "welcome-text" }, "Welcome everyone"),
            h(
              "div",
              { class: "name-title" },
              "I'm ",
              h("strong", null, "Hector M. Lopez")
            ),
            h(
              C,
              {
                variant: "outlined",
                size: "lg",
                class: "mt-2",
                "on-click": () => xtyle.router.go("/about"),
              },
              "About Me"
            )
          )
        ),
        h(
          d,
          { cols: "12", lg: "6", xl: "6", class: "d-f dy-ce dx-ce" },
          h("img", { src: A, class: "mt-n2" })
        )
      )
    )
  );
}
const I = "plugin_one__OpenSource",
  O = "https://hlop3z.github.io/";
function r(t) {
  return h(
    "div",
    { "x-html": !0, ...t, class: [I, t.class] },
    h(
      "div",
      { class: "ta-c mt-2 mb-4" },
      h("span", { class: "ts-2 td-b" }, t.title)
    ),
    h(
      "div",
      { class: "project-container" },
      h("x-slot", {
        "x-for": (e) =>
          h(
            "div",
            {
              "x-html": !0,
              class: "project-item bd-a",
              "on-click": () => window.open(`${O}${e.url}`),
            },
            h("h2", null, e.title),
            h("p", null, e.details)
          ),
        "x-in": t.items,
      })
    )
  );
}
const $ = "plugin_one__VideosBox",
  B = [
    {
      title: "google search",
      description: "Exploring advanced Google search techniques and tips.",
      link: "https://www.youtube.com/embed/TmleHTmjcUM?si=2HMLTZhXBHxKuYXb",
    },
    {
      title: "wiki",
      description: "Wikipedia-like website with key features.",
      link: "https://www.youtube.com/embed/gPv7UywnOL8?si=zK3lcvfKQR507i6l",
    },
    {
      title: "emails",
      description: "Platform to send and receive emails with core features.",
      link: "https://www.youtube.com/embed/fRGlhfswAJc?si=4axLRxK9PIgePxkY",
    },
    {
      title: "e-commerce",
      description: "E-Commerce platform with modern functionalities.",
      link: "https://www.youtube.com/embed/CAkkfX_kBy0?si=9QQikkWcwXL82oyQ",
    },
    {
      title: "social media",
      description: "Basic social media application with core features.",
      link: "https://www.youtube.com/embed/g7cC4xZFcMA?si=EjfiJezwBkdypidV",
    },
    {
      title: "slot machine",
      description: "Slot machine game with interactive features.",
      link: "https://www.youtube.com/embed/r_m5WJkt5xA?si=n08UE5Nc1BnCUR9b",
    },
  ].reverse();
function y(t) {
  return h(
    "section",
    { "x-html": !0, ...t, class: [$, t.class] },
    h("x-slot", {
      "x-for": (e) =>
        h(
          "div",
          { class: "video-item" },
          h("iframe", {
            width: "560",
            height: "315",
            src: e.link,
            title: "YouTube video player",
            frameborder: "0",
            allow:
              "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
            referrerpolicy: "strict-origin-when-cross-origin",
            allowfullscreen: !0,
          }),
          h("h2", { class: "tt-t" }, e.title),
          h("p", null, e.description)
        ),
      "x-in": B,
    })
  );
}
function E(t, e) {
  return (
    console.log("Plugin Name", "plugin_one"),
    console.log("The Plugin", t),
    console.log("Plugin Options", e),
    L(),
    {
      actions: f,
      directives: x,
      globals: b,
      init: v,
      models: w,
      router: k,
      store: S,
    }
  );
}
const j = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        About: g,
        Intro: m,
        OpenSource: r,
        VideosBox: y,
        install: E,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  { Layout: s, Button: F } = xtylist,
  G = [
    { text: "Introduction", url: "/" },
    { text: "Videos", url: "/videos" },
    { text: "Open Source", url: "/open-source" },
  ];
xtyle.util.inject(`
body, .bg-gradient {
    background-color: #0093e9;
    background-image: linear-gradient(63deg, #0093e9 0%, #80d0c7 100%);
  }
  `);
function R({ route: t, search: e, arg: u }) {
  return h(
    s.App,
    {
      "theme-color": "danger",
      "clip-right": !0,
      "clip-left": !0,
      breakpoints: ["xs", "sm", "md", "lg", "xl"],
      "space-x": xtyle.device.mobile ? 1 : 3,
      "space-y": xtyle.device.mobile ? 1 : 3,
      "slot-header": h(
        s.Header,
        { "theme-color": "white", elevation: "8" },
        h("span", null),
        h(
          "div",
          null,
          h("x-slot", {
            "x-in": G,
            "x-for": (i) =>
              h(
                F,
                {
                  stack: !0,
                  color: null,
                  "on-click": () => xtyle.router.go(i.url),
                },
                i.text
              ),
          })
        ),
        h("span", null)
      ),
      "slot-footer": h(
        s.Footer,
        { "theme-color": "white", elevation: "8" },
        h("span", null),
        h("span", { class: "ts-3 td-b" }, "Hector M. Lopez"),
        h("span", null)
      ),
      "slot-left": h(
        s.Left,
        {
          class: "ta-r",
          "theme-color": "white",
          elevation: "8",
          "clip-top": !0,
          "clip-bottom": !0,
        },
        "Left"
      ),
      "slot-right": h(
        s.Right,
        {
          "theme-color": "white",
          elevation: "8",
          "clip-top": !0,
          "clip-bottom": !0,
        },
        "Right"
      ),
    },
    h(s.Main, { class: "oy-a" }, h(xtyle.router.views, null))
  );
}
function T() {
  return h(m, null);
}
const { Grid: n } = xtylist,
  Q = [
    {
      title: "FastBerry",
      url: "fastberry",
      details: "FastAPI with GraphQL and SQL or Mongo",
    },
    { title: "Spoc", url: "spoc", details: "Foundational framework" },
    {
      title: "DBController",
      url: "dbcontroller",
      details: "SQL and Mongo database controller",
    },
    { title: "Zmag", url: "zmag", details: "ZeroMQ with GraphQL" },
  ],
  z = [
    {
      title: "Xtyle",
      url: "xtyle",
      details: "Effortlessly extend preact functions globally ",
    },
    {
      title: "Xtyle-CSS",
      url: "xtyle-css",
      details: "Colorless and without components framework",
    },
    {
      title: "Xtylist",
      url: "xtylist",
      details: "UI toolkit using xtyle and xtyle-css",
    },
    {
      title: "Vueky",
      url: "vueky",
      details: "Standalone extension of petite-vue",
    },
    {
      title: "Xkin",
      url: "xkin",
      details: "Lightweight alternative to jQuery",
    },
  ],
  N = [
    {
      title: "Interviews",
      url: "interviews-python",
      details:
        "Computer science fundamentals and software development and algorithms",
    },
  ];
function D() {
  return h(
    n,
    { row: !0, "gap-x": "2", "gap-y": "2", class: "" },
    h(n, { cols: "12", lg: "6", xl: "6" }, h(r, { title: "Python", items: Q })),
    h(
      n,
      { cols: "12", lg: "6", xl: "6" },
      h(r, { title: "Frontend", items: z })
    ),
    h(n, { cols: "12" }, h(r, { title: "Cheat Sheet", items: N }))
  );
}
const { Grid: p } = xtylist;
function J() {
  return h(
    p,
    { row: !0, "gap-x": "2", "gap-y": "2" },
    h(
      p,
      { cols: "12" },
      h(
        "div",
        { class: "ta-c" },
        h("span", { class: "ts-2 td-b" }, "Full Stack")
      ),
      h(y, { class: "py-4" })
    )
  );
}
function U() {
  return h(g, null);
}
xtyle.view("/", T);
xtyle.view("/open-source", D);
xtyle.view("/videos", J);
xtyle.view("/about", U);
xtyle.use(j);
const H = { history: !1, baseURL: "portfolio" };
xtyle.init(R, document.body, H);
console.log("Actions: ", xtyle.action.keys());
console.log("Directives: ", Object.keys(xtyle.allDirectives));
console.log("Globals: ", xtyle.global);
console.log("Models: ", xtyle.models.keys());
console.log("Routes: ", xtyle.router.keys());
console.log("Store: ", xtyle.store);
