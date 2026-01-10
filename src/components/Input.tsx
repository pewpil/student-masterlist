import style from "$/components/Input.module.css";

interface Props {
  type: string;
  name?: string;
  placeholder?: string;
  required?: boolean;
}

export default function Input(props: Props) {
  return (
    <input
      id={style.default}
      type={props.type}
      name={props.name}
      placeholder={props.placeholder}
      required={props.required}
    />
  );
}
