import style from "$/routes/auth/signup/(signup).module.css";
import { action } from "@solidjs/router";
import { CircleUser } from "lucide-solid";
import Button from "~/components/Button";
import Input from "~/components/Input";
import { register } from "~/lib/auth";
import { User } from "~/lib/types";

export default function Page() {
  const signUpAction = action(async (data: FormData) => {
    const name = data.get("username")?.toString() || "";
    const password = data.get("password")?.toString() || "";
    const user: User = {name, password};

    try {
      await register(user);
    } catch (error){
      console.log(error);
    }

  }, "sign-up-action");
  return (
    <form action={signUpAction} method="post" id={style.signup}>
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
      <button type="submit">test_button</button>
    </form>
  );
}
