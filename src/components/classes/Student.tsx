import { A } from "@solidjs/router";
import Button from "../Button";
import style from "$/components/classes/Student.module.css";

interface Props {
  children: string;
}

export default function Student(props: Props) {
  return (
    <A id={style.student} href="#">
      <Button type="student">{props.children}</Button>
    </A>
  );
}
