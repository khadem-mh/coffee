import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faAngleDoubleUp
} from "@fortawesome/free-solid-svg-icons";

const ToUp = () => {

    return (
        <Link href="#" className="btn btn-primary" style={{ position: 'fixed', bottom: '30px', left: '30px' }}>
            <FontAwesomeIcon icon={faAngleDoubleUp} className="fa fa-2x" style={{ color: 'white' }} />
        </Link>
    )
}

export default ToUp