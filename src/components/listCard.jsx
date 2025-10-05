import { GiPapers } from "react-icons/gi";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { Link } from "react-router";

export default function ListCard({ e }) {
    return (
        <section className="grid grid-cols-[10%_86%] my-4 bg-gray-50 p-4 rounded-2xl shadow-md/70 shadow-gray-400 items-center justify-items-center-safe w-11/12 gap-10 mx-auto">
            <div className="bg-gray-200 rounded-2xl h-3/4 my-auto flex items-center justify-center">
                <img src={e.image} alt={`Book: ${e.bookName}`} className="w-1/2 my-10 mx-auto h-auto rotate-x-15 rotate-z-12 skew-y-1 -skew-x-1 shadow-lg shadow-gray-800" />
            </div>
            <div className="w-full">
                <h1 className="text-2xl playfont font-bold">{e.bookName}</h1>
                <div className="flex items-center justify-between gap-4">
                    <p className="text-gray-700 my-2 font-semibold">By : {e.author}</p>
                    <div className="text-xs font-semibold flex flex-wrap items-center gap-2 my-2 text-emerald-700">
                        <p className="text-black text-base hidden sm:block">Tags :</p>
                        {e.tags.map((d, i) => <span key={i} className="bg-emerald-50 px-3 py-2 rounded-full">{d}</span>)}
                    </div>
                </div>
                <hr />
                    <div className="flex items-center my-2 gap-6">
                        <p className="flex items-center justify-center gap-2"><GiPapers /> Pages: {e.totalPages}</p>
                        <p className="flex items-center justify-center gap-2"><MdOutlinePeopleAlt /> Publisher: {e.publisher}</p>
                        <p className="flex items-center justify-center gap-2"><IoLocationOutline /> Year of Publishing: {e.yearOfPublishing}</p>
                    </div>
                <div className="flex items-center gap-4 font-semibold text-sm">
                        <p className="bg-sky-50 text-sky-600 px-3 py-2 rounded-full">Category: {e.category}</p>
                        <p className="bg-amber-50 text-amber-600 px-3 py-2 rounded-full">Rating: {e.rating}</p>
                        <Link state={e} to="/details" className="bg-green-600 text-white px-3 py-2 rounded-full">View Details</Link>
                </div>
            </div>
        </section>
    )
}