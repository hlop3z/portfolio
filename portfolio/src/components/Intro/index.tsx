const $NAME = "plugin_one__Intro";

import "./style.scss";
// import Photo from "/me.png";
import Photo from "/me_2.jpg";

const { Button, Grid } = xtylist;

export default function Intro(props) {
  const className = "oy-h ox-h d-f dy-ce dx-ce eh-100p";
  const AboutButton = () => (
    <Button
      variant="outlined"
      size="lg"
      class="mt-2"
      on-click={() => xtyle.router.go("/about")}
    >
      About Me
    </Button>
  );

  return (
    <div x-html {...props} class={[$NAME, props.class, className]}>
      <div class="d-f dx-ce dy-ce">
        <Grid row gap-x="2" gap-y="2" class="my-2 mx-4">
          <Grid cols="12" lg="6" xl="6" class="d-f dy-ce dx-ce">
            <div class="d-f df-col">
              <div class="welcome-text">Welcome everyone</div>
              <div class="name-title">
                I'm <strong>Hector M. Lopez</strong>
              </div>
              {["xl", "lg"].includes(xtyle.device.size) ? (
                <AboutButton />
              ) : null}
            </div>
          </Grid>
          <Grid cols="12" lg="6" xl="6" class="d-f dy-ce dx-ce">
            <img src={Photo} class="mt-n2 br-100p sb-24 ml-4" />
            <div class="d-f df-col">
              {!["xl", "lg"].includes(xtyle.device.size) ? (
                <AboutButton />
              ) : null}
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
