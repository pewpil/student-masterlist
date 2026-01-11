import style from "$/routes/classes/create-class.module.css";
import { Plus } from "lucide-solid";
import Button from "~/components/Button";
import Input from "~/components/Input";

export default function Page() {
  return (
    <div id={style.create}>
      <div id={style.title}>
        <Plus id={style.icon} />
        <h1>Create Class</h1>
      </div>
      <div>
        <Input type="text" placeholder="Name" required />
      </div>
      <Button>Create</Button>
    </div>
  );
}
