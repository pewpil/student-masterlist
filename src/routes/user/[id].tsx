import { useParams } from "@solidjs/router";

export default function Page() {
  const {id} = useParams();
  return (
    <p>user with id: {id}</p>
  );
}
