import "@/styles/globals.css"
import Link from "next/link"
import { useRouter } from "next/router"
// components
import Navbar from "@/components/modules/Navbar/Navbar"
import Footer from "@/components/modules/Footer/Footer"
import ToUp from "@/components/modules/ToUp/ToUp"
// Font Awesome
import "@fortawesome/fontawesome-svg-core/styles.css"
import { config } from "@fortawesome/fontawesome-svg-core"
config.autoAddCss = false

export default function App({ Component, pageProps }) {

  const router = useRouter()
  const routeName = router.pathname.slice(1).toLocaleUpperCase()

  return (
    <>

      <Navbar />

      {
        router.pathname !== '/' &&
        <div className="container-fluid page-header mb-5 position-relative overlay-bottom">
          <div className="d-flex flex-column align-items-center justify-content-center pt-0 pt-lg-5" style={{ minHeight: "400px" }}>
            <h1 className="display-4 mb-3 mt-0 mt-lg-5 text-white text-uppercase">{routeName}</h1>
            <div className="d-inline-flex mb-lg-5">
              <p className="m-0 text-white"><Link href="/" className="text-white">Home</Link></p>
              <p className="m-0 text-white px-2">/</p>
              <p className="m-0 text-white">{router.pathname.slice(1)}</p>
            </div>
          </div>
        </div>
      }


      <Component {...pageProps} />

      <Footer />

      <ToUp />

    </>
  )
}
