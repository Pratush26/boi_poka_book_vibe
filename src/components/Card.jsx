import { CiStar } from "react-icons/ci";
import { Link } from "react-router";

export default function Navbar ({d}) {
    console.log(d)
  return (
    <span>
        <div>
            <img src="" alt="book" />
        </div>
        <div>
            <span></span>
            <span></span>
        </div>
        <Link to="/"></Link>
        <p>By : </p>
        <div>
            <p></p>
            <span>
                <p></p>
                <CiStar />
            </span>
        </div>
    </span>
  )
}