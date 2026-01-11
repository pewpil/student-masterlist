import { useParams } from "@solidjs/router";
import { For } from "solid-js";
import Button from "~/components/Button";
import Student from "~/components/classes/Student";
import style from "$/routes/classes/[className].module.css";
import getOwner from "%/classes/(classes)/getOwner";
import getStudents from "%/classes/(classes)/getStudents";

export default function Page() {
  const { className } = useParams();

  return (
    <div id={style.class}>
      {/* Jude pa help ko ani Argument of type 'string | undefined' is not assignable to parameter of type 'string' daw ang className */}
      <h1>{decodeURIComponent(className)}</h1>
      <p>{getOwner()}</p>
      <h2>Students</h2>
      <div>
        <For each={getStudents()}>
          {(student) => <Student>{student}</Student>}
        </For>
      </div>
      <div>
        <Button type="default">Leave</Button>
        <Button type="negative">Delete Class</Button>
      </div>
    </div>
  );
}
