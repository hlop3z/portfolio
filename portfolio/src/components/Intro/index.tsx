const $NAME = "plugin_one__Intro";

import "./style.scss";

export default function Intro(props) {
  return (
    <div x-html {...props} class={[$NAME, props.class]}>
      {props.children}
    </div>
  );
}