import style from "$/routes/auth/signup/(signup).module.css";
import { action, createAsync } from "@solidjs/router";
import { CircleUser } from "lucide-solid";
import Button from "~/components/Button";
import Input from "~/components/Input";
import { register } from "~/lib/auth";
import { User } from "~/lib/types";

export default function Page() {
  const signup = action(async (data: FormData) => {
    const name = data.get("username")?.toString() || "";
    const password = data.get("password")?.toString() || "";
    const user: User = {name, password};

    try {
      const u = await register(user);
      console.log("user registered:", u);

    } catch (error) {

      console.log((error as Error).message);
    }

  }, "signup");

  return (
    <form action={signup} method="post" id={style.signup}>
      <div id={style.title}>
        <CircleUser id={style.icon} />
        <h1>Sign Up</h1>
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
      <Button>Sign Up</Button>
    </form>
  );
}
