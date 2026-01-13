import { ArrowRightIcon } from "lucide-solid";
import style from "$/routes/classes/join-class.module.css";
import Button from "~/components/Button";

export default function Page() {
  return (
    <form id={style.joinContainer}>
      <div id={style.topwrap}>
        <ArrowRightIcon />
        <h1>Join Class</h1>
      </div>

      <div id={style.lowerwrap}>
        <input type="text" placeholder="Name" required />
        <Button>Join</Button>
      </div>
    </form>
  );
}
