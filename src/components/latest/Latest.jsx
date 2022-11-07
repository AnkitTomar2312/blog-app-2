import "./latest.css"
import LatestArticle from "./latestarticle/LatestArticle"
import LatestStorie from "./lateststorie/LatestStorie"
import TheLatest from"./thelatest/TheLatest"

export default function Latest() {
  return (
    <div className="latest">
      <TheLatest />
      <LatestArticle />
      <LatestStorie />
    </div>
  )
}
