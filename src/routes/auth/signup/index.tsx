import style from "$/auth/signup/index.module.css";
import { CircleUser } from "lucide-solid";
export default function Page() {
  return (
    <form action="" id={style.signup}>
      <div id={style.title}>
        <CircleUser />
        <h1>Sign Up</h1>
      </div>
      <input type="text" name="username" placeholder="Username" required />
      <input type="password" name="password" placeholder="Password" required />
      <button type="submit">Sign Up</button>
    </form>
  );
}
