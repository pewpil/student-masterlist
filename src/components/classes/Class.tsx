import style from "$/components/classes/Class.module.css";
import { A } from "@solidjs/router";
import Button from "../Button";

interface Props {
  children: string;
}

export default function Class(props: Props) {
  return (
    <A href={`/classes/${props.children}`} id={style.class}>
      <Button type="class">{props.children}</Button>
    </A>
  );
}
