import { ArrowRightIcon } from "lucide-solid";
import style from "$/routes/classes/join-class.module.css";

export default function Page() {
  return (
    <form class="">
      <ArrowRightIcon />
      <h1>Join Class</h1>

      <input type="text" placeholder="Name" required />
      <button type="submit">Join</button>
    </form>
  );
}
