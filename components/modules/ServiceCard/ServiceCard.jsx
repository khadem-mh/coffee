import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Icons from "@fortawesome/free-solid-svg-icons";

const ServiceCard = ({ img, icon, title, desc }) => {
    return (
        <div className="col-lg-6 mb-5">
            <div className="row align-items-center">
                <div className="col-sm-5">
                    <img className="img-fluid mb-3 mb-sm-0" src={img} alt="service" />
                </div>
                <div className="col-sm-7">
                    <h4 className="d-flex align-items-center mb-4"><FontAwesomeIcon icon={Icons[icon]} className="service-icon py-2" />{title}</h4>
                    <p className="m-0">{desc}</p>
                </div>
            </div>
        </div>
    )
}

export default ServiceCard