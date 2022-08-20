import Link from "next/link";
import { url } from "../utils/config";

export default function PostLink(props) {
  let categoryPath;
  switch (props.category) {
    case "motion":
    case "looks":
    case "sound":
    case "events":
    case "control":
    case "sensing":
    case "operators":
    case "variables":
    case "list":
    case "custom":
      categoryPath = `/block/${props.category}.svg`;
      break;
    default:
      categoryPath = "/block/etc.svg";
      break;
  }

  return (
    <Link href={`/docs/${props.slug}`}>
      <div className="w-5/6 mx-auto h-16 rounded-2xl border-2 border-gray-400 my-2 shadow bg-base flex hover:border-secondary duration-300 cursor-pointer hover:shadow-lg">
        <div className="h-12 my-auto w-12 ml-2 flex-none">
          <img src={url(categoryPath)} alt={props.category} className="h-full w-full"/>
        </div>
        <div className="h-12 my-auto w-20 ml-2 flex-none border-x-2 flex justify-center items-center flex-wrap">
          {[...Array(props.difficult)].map((_,i) => {return <img key={i} src={url("/star_black.svg")} alt="" className="h-6 w-6"/>})}
          {[...Array(5 - props.difficult)].map((_,i) => {return <img key={i + 4} src={url("/star_border_black.svg")} alt="" className="h-6 w-6"/>})}
        </div>
        <div className="h-12 border-r-2 my-auto basis-1/3 flex items-center justify-center">
          <p className="font-bold text-2xl text-accent">{props.title}</p>
        </div>
        <div className="h-12 my-auto mx-2 basis-2/3">
          <p>{props.description}</p>
        </div>
      </div>
    </Link>
  )
}