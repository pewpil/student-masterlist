import style from "$/routes/index.module.css";
import { A } from "@solidjs/router";
import Button from "~/components/Button";

export default function Page() {
  return (
    <div id={style.account}>
      <A href="/signup">
        <Button>Sign Up</Button>
      </A>
      <A href="/login">
        <Button>Log In</Button>
      </A>
    </div>
  );
}
