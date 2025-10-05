import { useLoaderData, useNavigation } from "react-router";
import { findDB } from "../../utility/localDb";

export default function listedBooks () {
    const navigation = useNavigation()
    const [dbType, setDbType] = useState('readList')
    const readList = findDB('readList')
    const wishList = findDB('wishList')
    const arr = useLoaderData()
    const handleClick = ({type}) => {
        
    }
    const [data, setData] = useState([])
    return (
        <main>
            <div>
                <button onClick={() => handleClick('readList')}>Read List</button>
                <button onClick={() => handleClick('wishList')}>Wish List</button>
            </div>
            <section>
                {
                    navigation.state == 'loading' ?
                    <p>Loading...</p>
                    :
                    data.map(e => (
                        <p>da</p>
                    ))
                }
            </section>
        </main>
    )
}