import style from "$/routes/index.module.css";
import { A } from "@solidjs/router";
import Button from "~/components/Button";

export default function Page() {
  return (
    <div id={style.account}>
      <A href="/auth/signup">
        <Button>Sign Up</Button>
      </A>
      <A href="/auth/login">
        <Button>Log In</Button>
      </A>
    </div>
  );
}
