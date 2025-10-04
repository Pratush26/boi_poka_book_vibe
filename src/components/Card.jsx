import { CiStar } from "react-icons/ci";
import { Link } from "react-router";

export default function Card ({e}) {
  return (
    <span className="border flex flex-col justify-between border-gray-400 rounded-2xl py-4 px-6">
        <div>
            <img src={e.image} alt={`Book: ${e.bookName}`} className="w-1/2 my-10 mx-auto h-auto rotate-x-15 rotate-z-12 skew-y-1 -skew-x-1 shadow-lg shadow-gray-800" />
        </div>
        <div className="text-xs font-semibold flex flex-wrap gap-2 my-2 text-emerald-700"> 
            {e.tags.map((d, i) => <span key={i} className="bg-emerald-50 px-3 py-2 rounded-full">{d}</span>)}
        </div>
        <Link state={e} to="/details" className="text-2xl playfont font-bold hover:underline underline-offset-2">{e.bookName}</Link>
        <p className="text-gray-700 my-1">By : {e.author}</p>
        <div className="flex items-center justify-between gap-4 py-2 border-t-2 mt-4 border-t-gray-700 border-dashed">
            <p>{e.category}</p>
            <span className="flex items-center justify-center gap-2">
                <p>{e.rating}</p>
                <CiStar />
            </span>
        </div>
    </span>
  )
}