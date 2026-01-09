import { useParams } from "@solidjs/router";
export default function Page() {
  const params = useParams();
  return (
    <div>
      <p>hello from home/{params.id}</p>
    </div>
  );
}
