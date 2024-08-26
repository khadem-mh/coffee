import "@/styles/globals.css"
import { useRouter } from "next/router"
// components
import Navbar from "@/components/modules/Navbar/Navbar"
import Footer from "@/components/modules/Footer/Footer"
import ToUp from "@/components/modules/ToUp/ToUp"
import PageHeader from "@/components/modules/PageHeader/PageHeader"
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
        router.pathname !== '/' && !router.pathname.includes('/products') && <PageHeader routeName={routeName} routePathName={router.pathname.slice(1)} />
      }

      <Component {...pageProps} />

      <Footer />

      <ToUp />
    </>
  )
}
