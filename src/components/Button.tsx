import style from "$/components/Button.module.css";

interface Props {
  children: string;
  type?: "default" | "negative" | "class" | "student";
}

export default function Button(props: Props) {
  const buttonType = {
    default: style.default,
    negative: style.negative,
    class: style.class,
    student: style.student,
  }[props.type || "default"];

  return (
    <button id={style.default} class={buttonType}>
      {props.children}
    </button>
  );
}
