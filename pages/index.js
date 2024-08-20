import TempAbout from "@/components/template/TempAbout/TempAbout";
import TempService from "@/components/template/TempService/TempService";
import TempMenu from "@/components/template/TempMenu/TempMenus";
import TempTestimonial from "@/components/template/TempTestimonial/TempTestimonial";
import TempReservation from "@/components/template/TempReservation/TempReservation";
import Slider from "@/components/template/Slider/Slider";
import Offer from "@/components/template/Offer/Offer";
//
import route from "@/data/routes";

export default function Home({ data }) {
  return (
    <>
      <Slider />

      <TempAbout />

      <TempService services={data.services} />

      <Offer />

      <TempMenu />

      <TempReservation />

      <TempTestimonial />
    </>
  )
}

export async function getStaticProps() {

  let services = []

  try {

    const res = await fetch(`${route}services`)
    services = await res.json()

  } catch (err) {

    console.warn("Backend Project Faild To Run")

  }

  return {
    props: {
      data: {
        services
      }
    },
    revalidate: (60 * 60) * 12
  }

}