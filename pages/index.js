import About from "./about";
import Service from "./service";
import Menu from "./menu";
import Testimonial from "./testimonial";
import Reservation from "./reservation";

export default function Home() {
  return (
    <>

      <div className="container-fluid p-0 mb-5">
        <div id="blog-carousel" className="carousel slide overlay-bottom" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="w-100" src="img/carousel-1.jpg" alt="Image" />
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <h2 className="text-primary font-weight-medium m-0">We Have Been Serving</h2>
                <h1 className="display-1 text-white m-0">COFFEE</h1>
                <h2 className="text-white m-0">* SINCE 1950 *</h2>
              </div>
            </div>
            <div className="carousel-item">
              <img className="w-100" src="img/carousel-2.jpg" alt="Image" />
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <h2 className="text-primary font-weight-medium m-0">We Have Been Serving</h2>
                <h1 className="display-1 text-white m-0">COFFEE</h1>
                <h2 className="text-white m-0">* SINCE 1950 *</h2>
              </div>
            </div>
          </div>
          <a className="carousel-control-prev" href="#blog-carousel" data-slide="prev">
            <span className="carousel-control-prev-icon"></span>
          </a>
          <a className="carousel-control-next" href="#blog-carousel" data-slide="next">
            <span className="carousel-control-next-icon"></span>
          </a>
        </div>
      </div>

      <About />

      <Service />

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

      <Menu />

      <Reservation />

      <Testimonial />

    </>
  );
}
