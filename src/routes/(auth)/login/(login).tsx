import style from "$/routes/auth/login/(login).module.css";
import { A, action, redirect } from "@solidjs/router";
import { ArrowRight } from "lucide-solid";
import Button from "~/components/Button";
import Input from "~/components/Input";
import { authenticate } from "~/lib/auth";
import { User } from "~/lib/types";

export default function Page() {
  const login = action(async (data: FormData) => {
    const name = data.get("username")?.toString() || "";
    const password = data.get("password")?.toString() || "";
    const user: User = {name, password};

    try {
      await authenticate(user);
      return redirect("/classes");


    } catch (error) {
      console.log((error as Error).message);
    }

  }, "login");

  return (
    <form action={login} method="post" id={style.login}>
      <div id={style.title}>
        <ArrowRight id={style.icon} />
        <h1>Log In</h1>
      </div>
      <div>
        <Input type="text" name="username" placeholder="Username" required />
        <Input
          type="password"
          name="password"
          placeholder="Password"
          required
        />
      </div>
      <Button>Log In</Button>
    </form>
  );
}
