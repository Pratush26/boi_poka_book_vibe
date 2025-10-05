import { useLocation } from "react-router"


export default function Details() {
    const d = useLocation()
    const e = d.state
    return (
        <section className="grid grid-cols-1 md:grid-cols-2 items-center justify-items-center-safe w-11/12 gap-10 mx-auto">
            <div className="bg-gray-200 rounded-2xl h-full flex items-center justify-center">
                <img src={e.image} alt={`Book: ${e.bookName}`} className="w-1/2 my-10 mx-auto h-auto rotate-x-15 rotate-z-12 skew-y-1 -skew-x-1 shadow-lg shadow-gray-800" />
            </div>
            <div>
                <h1 className="text-4xl playfont font-bold">{e.bookName}</h1>
                <p className="text-gray-700 my-2 font-semibold text-lg">By : {e.author}</p>
                <hr />
                <div className="flex items-center justify-between gap-4">
                    <p className="my-3 text-gray-800 text-sm font-semibold">{e.category}</p>
                    <div className="text-xs font-semibold flex flex-wrap items-center gap-2 my-2 text-emerald-700">
                        <p className="text-black text-base hidden sm:block">Tags :</p>
                        {e.tags.map((d, i) => <span key={i} className="bg-emerald-50 px-3 py-2 rounded-full">{d}</span>)}
                    </div>
                </div>
                <hr />
                <article className="text-gray-700 font-medium my-4"><strong>Review : </strong> {e.review}</article>
                <hr />
                <span className="flex items-center gap-2 my-5">
                    <div className="flex flex-col justify-between gap-1 text-gray-600">
                        <p>Number of Pages:</p>
                        <p>Publisher:</p>
                        <p>Year Of Publishing:</p>
                        <p>Ratings:</p>
                    </div>
                    <div className="flex flex-col justify-between gap-1 font-semibold">
                        <p>{e.totalPages}</p>
                        <p>{e.publisher}</p>
                        <p>{e.yearOfPublishing}</p>
                        <p>{e.rating}</p>
                    </div>
                </span>
                <div className="space-x-2 my-4">
                    <button className="px-4 py-2 rounded cursor-pointer font-bold border-1">Read</button>
                    <button className="px-4 py-2 rounded cursor-pointer font-bold bg-sky-300 text-white">Wishlist</button>
                </div>
            </div>
        </section>
    )
}