const $NAME = "plugin_one__OpenSource";

import "./style.scss";

// const GITHUB = "https://github.com/hlop3z/";
const GITHUB = "https://hlop3z.github.io/";

export default function OpenSource(props) {
  return (
    <div x-html {...props} class={[$NAME, props.class]}>
      <div class="ta-c mt-2 mb-4">
        <span class="ts-2 td-b">{props.title}</span>
      </div>
      <div class="project-container">
        <x-slot
          x-for={(item) => (
            <div
              x-html
              class="project-item bd-a"
              on-click={() => window.open(`${GITHUB}${item.url}`)}
            >
              <h2>{item.title}</h2>
              <p>{item.details}</p>
            </div>
          )}
          x-in={props.items}
        ></x-slot>
      </div>
    </div>
  );
}
