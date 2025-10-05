import { RxCross1, RxHamburgerMenu } from "react-icons/rx";
import { Link, useLocation } from "react-router";
import { useState } from "react";

export default function Navbar() {
  const { pathname } = useLocation();
  const [isOpened, setIsOpened] = useState(false)

  return (
    <header>
      <nav className="flex items-center justify-between gap-2 w-5/6 mx-auto px-4 py-8 font-medium">
        <Link to='/' className="text-2xl font-bold">Book Vibe</Link>
        <button onClick={() => setIsOpened(!isOpened)} className="md:hidden">
          {isOpened ? <RxCross1 /> : <RxHamburgerMenu />}
        </button>
        <div className="space-x-3 text-gray-500 hidden md:block">
          <Link to='/' className={`${pathname === '/' && "border-1 rounded-sm p-3 text-emerald-600 border-emerald-600"}`}>Home</Link>
          <Link to='/listed' className={`${pathname === '/listed' && "border-1 rounded-sm p-3 text-emerald-600 border-emerald-600"}`}>Listed Books</Link>
          <Link to='/pages-graph' className={`${pathname === '/pages-graph' && "border-1 rounded-sm p-3 text-emerald-600 border-emerald-600"}`}>Pages to Read</Link>
        </div>
        <div className="space-x-2 md:block hidden">
          <button className="px-4 py-2 rounded-md bg-emerald-400 text-white">Sign In</button>
          <button className="px-4 py-2 rounded-md bg-sky-400 text-white">Sign Up</button>
        </div>
      </nav >
      {
        isOpened
        &&
        <div className="flex flex-col gap-3 items-center justify-center">
          <Link to='/' className={`${pathname === '/' && "border-1 rounded-sm p-3 text-emerald-600 border-emerald-600"}`}>Home</Link>
          <Link to='/listed' className={`${pathname === '/listed' && "border-1 rounded-sm p-3 text-emerald-600 border-emerald-600"}`}>Listed Books</Link>
          <Link to='/pages-graph' className={`${pathname === '/pages-graph' && "border-1 rounded-sm p-3 text-emerald-600 border-emerald-600"}`}>Pages to Read</Link>
          <button className="px-4 py-2 rounded-md bg-emerald-400 text-white">Sign In</button>
          <button className="px-4 py-2 rounded-md bg-sky-400 text-white">Sign Up</button>
        </div>
      }
    </header>
  )
}