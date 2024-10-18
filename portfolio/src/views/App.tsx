// import viteLogo from "/vite.svg";

/* DevTools */
// import lorem from "../devtool/lorem.mjs";

/* Utils */
//const { useSignal } = preact;
const { Layout, Button } = xtylist;

const LINKS = [
  { text: "Introduction", url: "/" },
  { text: "Portfolio", url: "/portfolio" },
  { text: "Open Source", url: "/open-source" },
];

// @ts-ignore
export default function Application({ route, search, arg }) {
  return (
    <Layout.App
      theme-color="danger"
      clip-right
      clip-left
      breakpoints={["xs", "sm", "md", "lg", "xl"]}
      space-x={xtyle.device.mobile ? 1 : 3}
      space-y={xtyle.device.mobile ? 1 : 3}
      slot-header={
        <Layout.Header theme-color="white" elevation="8">
          <span></span>
          <div>
            <x-slot
              x-in={LINKS}
              x-for={(item) => (
                <Button
                  stack
                  color={null}
                  on-click={() => xtyle.router.go(item.url)}
                >
                  {item.text}
                </Button>
              )}
            ></x-slot>
          </div>

          <span></span>
        </Layout.Header>
      }
      slot-footer={
        <Layout.Footer theme-color="white" elevation="8">
          <span></span>
          <span class="ts-3 td-b">Hector M. Lopez</span>
          <span></span>
        </Layout.Footer>
      }
      slot-left={
        <Layout.Left
          class="ta-r"
          theme-color="white"
          elevation="8"
          clip-top
          clip-bottom
        >
          Left
        </Layout.Left>
      }
      slot-right={
        <Layout.Right theme-color="white" elevation="8" clip-top clip-bottom>
          Right
        </Layout.Right>
      }
    >
      <Layout.Main theme-color="white" class="oy-a">
        <xtyle.router.views />
      </Layout.Main>
    </Layout.App>
  );
}
