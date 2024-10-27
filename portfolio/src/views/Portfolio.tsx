import * as Project from "../components/index.ts";

/* DevTools */
// import lorem from "../devtool/lorem.mjs";

/* Utils */
//const { useSignal } = preact;
const { Grid } = xtylist;

// @ts-ignore
export default function Main() {
  return (
    <Grid row gap-x="2" gap-y="2" class="oy-a">
      <Grid cols="12">
        <div class="ta-c">
          <span class="ts-2 td-b">Full Stack</span>
        </div>
        <Project.VideosBox class="py-4" />
      </Grid>
    </Grid>
  );
}
