import style from "$/routes/auth/signup/(signup).module.css";
import { CircleUser } from "lucide-solid";
import Button from "~/components/Button";
import Input from "~/components/Input";
export default function Page() {
  return (
    <form action="" id={style.signup}>
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
