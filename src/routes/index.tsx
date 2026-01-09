import style from "$/index.module.css";
import { A } from "@solidjs/router";

export default function Page() {
  return (
    <div id={style.account}>
      <A href="/auth/signup">
        <button>Sign Up</button>
      </A>
      <A href="/auth/login">
        <button>Log in</button>
      </A>
    </div>
  );
}
