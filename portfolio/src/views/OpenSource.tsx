import * as Project from "../components/index.ts";

/* DevTools */
// import lorem from "../devtool/lorem.mjs";

/* Utils */
//const { useSignal } = preact;
const { Grid } = xtylist;

const PY_PROJECTS = [
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
];

const JS_PROJECTS = [
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
  { title: "Xkin", url: "xkin", details: "Lightweight alternative to jQuery" },
];

const ED_PROJECTS = [
  {
    title: "Interviews",
    url: "interviews-python",
    details:
      "Computer science fundamentals and software development and algorithms",
  },
];

// @ts-ignore
export default function Main() {
  return (
    <Grid row gap-x="2" gap-y="2" class="">
      <Grid cols="12" lg="6" xl="6">
        <Project.OpenSource
          title="Python"
          items={PY_PROJECTS}
        ></Project.OpenSource>
      </Grid>
      <Grid cols="12" lg="6" xl="6">
        <Project.OpenSource
          title="Frontend"
          items={JS_PROJECTS}
        ></Project.OpenSource>
      </Grid>
      <Grid cols="12">
        <Project.OpenSource
          title="Cheat Sheet"
          items={ED_PROJECTS}
        ></Project.OpenSource>
      </Grid>
    </Grid>
  );
}
