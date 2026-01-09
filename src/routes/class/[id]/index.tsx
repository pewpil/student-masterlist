import { useParams } from "@solidjs/router";


export default function Page() {
  const {id} = useParams();
  return (
    <p>class with id: {id}</p>
  );
}
