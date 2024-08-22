import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faMapMarkerAlt,
    faPhoneAlt,
    faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import route from "@/data/routes";
import { useState } from "react";
import { emailIsValid } from "@/validation/regex";

const Footer = () => {

    const [email, setEmail] = useState("")

    const handleJoinUserToNewsLetter = async event => {
        event.preventDefault()

        if (emailIsValid(email)) {

            try {

                const res = await fetch(`${route}newsLetters`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ email })
                })

                res.status = 201 ? alert("SUCCESS") : alert("Faild To Execute")
                setEmail("")

            } catch (err) {
                //
            }

        }
        else alert("Email is not valid")
    }

    return (
        <div className="container-fluid footer text-white mt-5 pt-5 px-0 position-relative overlay-top">

            <div className="row mx-0 pt-5 px-sm-3 px-lg-5 mt-4">
                <div className="col-lg-3 col-md-6 mb-5">
                    <h4 className="text-white text-uppercase mb-4" style={{ letterSpacing: "3px" }}>Get In Touch</h4>
                    <p><FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />123 Street, New York, USA</p>
                    <p><FontAwesomeIcon icon={faPhoneAlt} className="mr-2" />+98 0903 133 5939</p>
                    <p className="m-0"><FontAwesomeIcon icon={faEnvelope} className="mr-2" />khadem13359@gmail.com</p>
                </div>
                <div className="col-lg-3 col-md-6 mb-5">
                    <h4 className="text-white text-uppercase mb-4" style={{ letterSpacing: "3px" }}>Follow Us</h4>
                    <p>Amet elitr vero magna sed ipsum sit kasd sea elitr lorem rebum</p>
                    <div className="d-flex justify-content-start">

                        <Link href="https://github.com/khadem-mh" className="mr-3">
                            <img src="img/social-media/github.png" alt="social" />
                        </Link>

                        <Link href="https://www.linkedin.com/in/khadem-mh/" className="mr-3">
                            <img src="img/social-media/linkedin.png" alt="social" />
                        </Link>

                        <Link href="https://t.me/mhkhadem" className="mr-3">
                            <img src="img/social-media/telegram.png" alt="social" />
                        </Link>

                        <Link href="https://wa.me/989031335939">
                            <img src="img/social-media/whatsapp.png" alt="social" />
                        </Link>

                    </div>
                </div>
                <div className="col-lg-3 col-md-6 mb-5">
                    <h4 className="text-white text-uppercase mb-4" style={{ letterSpacing: "3px" }}>Open Hours</h4>
                    <div>
                        <h6 className="text-white text-uppercase">Monday - Friday</h6>
                        <p>8.00 AM - 8.00 PM</p>
                        <h6 className="text-white text-uppercase">Saturday - Sunday</h6>
                        <p>2.00 PM - 8.00 PM</p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 mb-5">
                    <h4 className="text-white text-uppercase mb-4" style={{ letterSpacing: "3px" }}>Newsletter</h4>
                    <p>Amet elitr vero magna sed ipsum sit kasd sea elitr lorem rebum</p>
                    <div className="w-100">
                        <div className="input-group">
                            <input value={email} onChange={e => setEmail(e.target.value)} type="text" className="form-control border-light" style={{ padding: "25px" }} placeholder="Your Email" />
                            <div className="input-group-append">
                                <button className="btn btn-primary font-weight-bold px-3" onClick={e => handleJoinUserToNewsLetter(e)}>JOIN</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid text-center text-white border-top mt-4 py-4 px-sm-3 px-md-5" style={{ borderColor: 'rgba(256, 256, 256, .1) !important' }}>
                <p className="mb-2 text-white">Copyright &copy; <Link className="font-weight-bold" href="#">Domain</Link>. All Rights Reserved.</p>
                <p className="m-0 text-white">Made with ❤️ by <Link className="font-weight-bold" href="https://github.com/khadem-mh" target="_blank"> mh khadem</Link></p>
            </div>

        </div >
    )
}

export default Footer