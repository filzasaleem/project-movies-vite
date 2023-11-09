import { Link } from "react-router-dom"

export const NotFound = () => {
  return (
    <>
    <div className="pt-6 pl-6 text-white bg-black opacity-60 z-10 font-bold text-2xl underline">
          <Link to="/">Back</Link>
        </div>
    <div className="flex items-center justify-center h-screen w-screen">
    <h1 className=" text-white font-bold text-xl ">
      Oh Uh, it seems that the page you are trying to access does not exist.
    </h1>
   
  </div>
  </>
  )
}
