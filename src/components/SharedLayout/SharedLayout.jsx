import { Suspense } from "react"
import { NavLink, Outlet } from "react-router-dom"

const SharedLayout = () => {
  return (
    <div>
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'movies'} end>Movies</NavLink>
        <Suspense>
            <div>
                <Outlet/>
            </div>
        </Suspense>
    </div>
  )
}

export default SharedLayout