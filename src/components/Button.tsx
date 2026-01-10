import style from "$/components/Button.module.css";

interface Props {
  children: string;
}

export default function Button(props: Props) {
  return <button id={style.default}>{props.children}</button>;
}
