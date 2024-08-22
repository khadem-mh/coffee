import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Icons from "@fortawesome/free-solid-svg-icons";

const ExampleInfo = ({desc, title, icon}) => {

    return (
        <div className="col-sm-4 text-center mb-3">
            <FontAwesomeIcon icon={Icons[icon]} className="fa-2x mb-3 text-primary" />
            <h4 className="font-weight-bold">{title}</h4>
            <p>{desc}</p>
        </div>
    )
}

export default ExampleInfo