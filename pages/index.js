import TempAbout from "@/components/template/TempAbout/TempAbout";
import TempService from "@/components/template/TempService/TempService";
import TempMenu from "@/components/template/TempMenu/TempMenus";
import TempTestimonial from "@/components/template/TempTestimonial/TempTestimonial";
import TempReservation from "@/components/template/TempReservation/TempReservation";
import Slider from "@/components/template/Slider/Slider";
//
import route from "@/data/routes";

export default function Home({ data }) {

  console.log(data);


  return (
    <>

      <Slider />

      <TempAbout />

      <TempService services={data.services} />

      <div className="offer container-fluid my-5 py-5 text-center position-relative overlay-top overlay-bottom">
        <div className="container py-5">
          <h1 className="display-3 text-primary mt-3">50% OFF</h1>
          <h1 className="text-white mb-3">Sunday Special Offer</h1>
          <h4 className="text-white font-weight-normal mb-4 pb-3">Only for Sunday from 1st Jan to 30th Jan 2045</h4>
          <form className="form-inline justify-content-center mb-4">
            <div className="input-group">
              <input type="text" className="form-control p-4" placeholder="Your Email" style={{ height: "60px" }} />
              <div className="input-group-append">
                <button className="btn btn-primary font-weight-bold px-4" type="submit">Sign Up</button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <TempMenu />

      <TempReservation />

      <TempTestimonial />

    </>
  )
}

export async function getStaticProps() {

  const res = await fetch(`${route}services`)
  const services = await res.json()

  if (!res.status === 200) return { notFound: true }

  return {
    props: {
      data: {
        services
      }
    },
    revalidate: (60 * 60) * 12
  }

}