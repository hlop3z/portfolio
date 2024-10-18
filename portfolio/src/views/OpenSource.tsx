import * as Project from "../components/index.ts";

/* DevTools */
// import lorem from "../devtool/lorem.mjs";

/* Utils */
//const { useSignal } = preact;
const { Grid } = xtylist;

const PY_PROJECTS = [
  { title: "fastberry", url: "fastberry", details: "FastAPI with GraphQL" },
  { title: "spoc", url: "spoc", details: "FastAPI with GraphQL" },
  {
    title: "dbcontroller",
    url: "dbcontroller",
    details: "FastAPI with GraphQL",
  },
  { title: "zmag", url: "zmag", details: "FastAPI with GraphQL" },
  { title: "dinja", url: "dinja", details: "FastAPI with GraphQL" },
  { title: "sqlow", url: "dinja", details: "FastAPI with GraphQL" },
];
const JS_PROJECTS = [
  { title: "xtyle", url: "fastberry", details: "FastAPI with GraphQL" },
  { title: "xtyle-css", url: "fastberry", details: "FastAPI with GraphQL" },
  { title: "vueky", url: "fastberry", details: "FastAPI with GraphQL" },
  { title: "xkin", url: "fastberry", details: "FastAPI with GraphQL" },
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
    </Grid>
  );
}
