import * as Project from "../components/index.ts";

/* DevTools */
// import lorem from "../devtool/lorem.mjs";

/* Utils */
//const { useSignal } = preact;
const { Grid } = xtylist;

// @ts-ignore
export default function Main() {
  return (
    <Grid row gap-x="2" gap-y="2" class="">
      <Grid cols="12" lg="6" xl="6">
        <div class="ta-c">
          <span class="ts-2">Python</span>
        </div>
      </Grid>
      <Grid cols="12" lg="6" xl="6">
        <div class="ta-c">
          <span class="ts-2">Python</span>
        </div>
      </Grid>
    </Grid>
  );
}
