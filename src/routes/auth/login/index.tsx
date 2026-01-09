import style from "$/auth/login/index.module.css";
import { ArrowRight } from "lucide-solid";
export default function Page() {
  return (
    <form action="" id={style.login}>
      <div id={style.title}>
        <ArrowRight />
        <h1>Log In</h1>
      </div>
      <input type="text" name="username" placeholder="Username" required />
      <input type="password" name="password" placeholder="Password" required />
      <button type="submit">Log In</button>
    </form>
  );
}
