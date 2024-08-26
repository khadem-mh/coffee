import NavLink from "next/link"
import GlobalSearch from "../GlobalSearch/GlobalSearch"
import { useEffect, useState } from "react"
import { useRouter } from "next/router"

const Navbar = () => {

    const router = useRouter()
    const [search, setSerch] = useState("")

    useEffect(() => {
        if (router.query?.q) setSerch(router.query.q)
    }, [])

    const clickHandlerSearch = () => router.push(`/search?q=${search.trim()}`)

    return (
        <div className="container-fluid p-0 nav-bar">
            <nav className="navbar navbar-expand-lg bg-none navbar-dark py-3">
                <a href="index.html" className="navbar-brand px-lg-4 m-0">
                    <h1 className="m-0 display-4 text-uppercase text-white">Next-Coffee</h1>
                </a>
                <GlobalSearch value={search} setValue={setSerch} onClickSearch={clickHandlerSearch} />
                <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                    <div className="navbar-nav ml-auto p-4">
                        <NavLink href="/" className="nav-item nav-link">Home</NavLink>
                        <NavLink href="/about" className="nav-item nav-link">About</NavLink>
                        <NavLink href="/service" className="nav-item nav-link">Service</NavLink>
                        <NavLink href="/menu" className="nav-item nav-link">Menu</NavLink>
                        <div className="nav-item dropdown">
                            <NavLink href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Pages</NavLink>
                            <div className="dropdown-menu text-capitalize">
                                <NavLink href="/reservation" className="dropdown-item">Reservation</NavLink>
                                <NavLink href="/testimonial" className="dropdown-item">Testimonial</NavLink>
                            </div>
                        </div>
                        <NavLink href="contact" className="nav-item nav-link">Contact</NavLink>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar