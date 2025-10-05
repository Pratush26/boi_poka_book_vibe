import { Link, useLocation } from "react-router";

export default function Navbar() {
  const {pathname} = useLocation();

  return (
    <nav className="flex items-center justify-between gap-2 w-5/6 mx-auto px-4 py-8 font-medium">
      <Link to='/' className="text-2xl font-bold">Book Vibe</Link>
      <div className="space-x-3 text-gray-500">
        <Link to='/' className={`${pathname === '/' && "border-1 rounded-sm p-3 text-emerald-600 border-emerald-600"}`}>Home</Link>
        <Link to='/listed' className={`${pathname === '/listed' && "border-1 rounded-sm p-3 text-emerald-600 border-emerald-600"}`}>Listed Books</Link>
        <Link to='/pages-graph' className={`${pathname === '/pages-graph' && "border-1 rounded-sm p-3 text-emerald-600 border-emerald-600"}`}>Pages to Read</Link>
      </div>
      <div className="space-x-2">
        <button className="px-4 py-2 rounded-md bg-emerald-400 text-white">Sign In</button>
        <button className="px-4 py-2 rounded-md bg-sky-400 text-white">Sign Up</button>
      </div>
    </nav>
  )
}