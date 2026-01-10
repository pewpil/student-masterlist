import style from "$/routes/auth/login/(login).module.css";
import { ArrowRight } from "lucide-solid";
import Button from "~/components/Button";
import Input from "~/components/Input";
export default function Page() {
  return (
    <form action="" id={style.login}>
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
