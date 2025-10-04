import { Outlet, useLoaderData } from "react-router";
import Navbar from "../../components/Navbar";

export default function Root () {
  const data = useLoaderData()
  console.log(data)
  return (
    <main>
      <Navbar/>
      <Outlet />
    </main>
  )
}