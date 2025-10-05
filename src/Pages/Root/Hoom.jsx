import { useLoaderData, useNavigation } from "react-router"
import Card from "../../components/Card"

export default function Home() {
    const dataSet = useLoaderData()
    const navigation = useNavigation
    return (
        <main className="w-11/12 mx-auto">
            <section className="grid grid-cols-1 sm:grid-cols-2 items-center justify-items-center-safe gap-4 min-h-[60vh] p-4 sm:p-8 md:p-16 rounded-2xl bg-gray-200 my-10">
                <span className="space-y-6 font-semibold order-2 sm:order-1 text-center sm:text-start">
                    <h1 className="playfont text-5xl">Books to freshen up your bookshelf</h1>
                    <button className="text-white bg-emerald-600 px-4 py-2 rounded-sm">View The List</button>
                </span>
                <img src={dataSet[0].image} className="w-1/3 h-auto rotate-x-15 rotate-z-12 skew-y-1 -skew-x-1 shadow-lg shadow-gray-800 order-1 sm:order-2" alt="book" />
            </section>
            <h3 className="playfont text-4xl font-bold text-center my-6">Books</h3>
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5 gap-6">
                {
                    navigation.state === "loading" ?
                        <p>Loading...</p>
                        :
                        dataSet.map(e => <Card key={e.bookId} e={e} />)
                }
            </section>
        </main>
    )
}