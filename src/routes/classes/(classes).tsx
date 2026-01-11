import style from "$/routes/classes/(classes).module.css";
import { A } from "@solidjs/router";
import { For } from "solid-js";
import Button from "~/components/Button";
import Class from "~/components/classes/Class";
import getClasses from "%/classes/(classes)/getClasses";

export default function Page() {
  return (
    <div id={style.classes}>
      <h1>Classes</h1>
      <div>
        <For each={[getClasses()]}>
          {(classes) => classes.map((className) => <Class>{className}</Class>)}
        </For>
      </div>
      <div>
        <A href="/classes/join-class">
          <Button>Join</Button>
        </A>
        <A href="/classes/create-class">
          <Button>Create</Button>
        </A>
      </div>
    </div>
  );
}
