import { useParams } from "@solidjs/router";
import { For } from "solid-js";
import Button from "~/components/Button";
import Student from "~/components/classes/Student";

export default function Page() {
  const { className } = useParams();

  return (
    <div>
      <h1>{decodeURIComponent(className)}</h1>
      <p>Owner Name</p>
      <h2>Students</h2>
      <div>
        <For each={["Student 1", "Student 2", "Student 3"]}>
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
