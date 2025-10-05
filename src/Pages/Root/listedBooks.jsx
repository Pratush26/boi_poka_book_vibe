import { useLoaderData, useNavigation } from "react-router";
import { findDB } from "../../utility/localDb";
import ListCard from "../../components/listCard";
import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

export default function ListedBooks() {
    const navigation = useNavigation()
    const arr = useLoaderData();
    const readListArr = findDB("readList")
    const [readList, setReadList] = useState(arr.filter(e => readListArr.includes(e.bookId)))
    const wishListArr = findDB("wishList")
    const [wishList, setWishList] = useState(arr.filter(e => wishListArr.includes(e.bookId)))
    const handleSort = (type) => {
        if (type === "ratings") {
            setReadList(prev => [...prev].sort((a, b) => a.rating - b.rating))
            setWishList(prev => [...prev].sort((a, b) => a.rating - b.rating))
        }
        else if (type === "totalpages") {
            setReadList(prev => [...prev].sort((a, b) => a.totalPages - b.totalPages))
            setWishList(prev => [...prev].sort((a, b) => a.totalPages - b.totalPages))
        }
        else if (type === "year") {
            setReadList(prev => [...prev].sort((a, b) => a.yearOfPublishing - b.yearOfPublishing))
            setWishList(prev => [...prev].sort((a, b) => a.yearOfPublishing - b.yearOfPublishing))
        }
    }
    return (
        <main className="my-6 w-11/12 mx-auto">
            <h1 className="p-8 text-2xl font-bold text-gray-800 m-4 rounded-2xl bg-gray-300 flex items-center justify-center w-full">Books</h1>
            <form className="flex items-center justify-center">
                <select
                    defaultValue="Sort By"
                    className="p-4 bg-green-500 rounded-lg text-white font-bold"
                    onChange={(e) => handleSort(e.target.value)} // ⬅ use onChange here
                >
                    <option disabled value="Sort By">Sort By</option>
                    <option value="ratings">Rating</option>
                    <option value="totalpages">Number of pages</option>
                    <option value="year">Publishing year</option>
                </select>
            </form>
            <Tabs>
                <TabList>
                    <Tab>Read List</Tab>
                    <Tab>Wish List</Tab>
                </TabList>

                <TabPanel>
                    {
                        navigation.state == 'loading' ?
                            <p>Loading...</p>
                            :
                            readList.map(e => (
                                <ListCard e={e} key={e.bookId} />
                            ))
                    }
                </TabPanel>
                <TabPanel>
                    {
                        navigation.state == 'loading' ?
                            <p>Loading...</p>
                            :
                            wishList.map(e => (
                                <ListCard e={e} key={e.bookId} />
                            ))
                    }
                </TabPanel>
            </Tabs>
        </main>
    )
}