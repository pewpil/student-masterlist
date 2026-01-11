import { ArrowRightIcon } from "lucide-solid"

const joinClass = () => {
  return (
    <form class="">
      <ArrowRightIcon />
      <h1>Join Class</h1>

      <input type="text" placeholder="Name" required />
      <button type="submit">Join</button>
    </form>
  )
}

export default joinClass
