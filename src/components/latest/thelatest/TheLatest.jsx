import Heading from "./Heading"
import "./thelatest.css"
import TheLatestCard from "./TheLatestCard"

export default function TheLatest() {
  return (
    <div className="thelatest">
      <Heading />
      <div className="images">
        <TheLatestCard />
        <TheLatestCard />
        <TheLatestCard />
      </div>
    </div>
  )
}
