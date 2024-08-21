import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faCheck
} from "@fortawesome/free-solid-svg-icons"
// assets
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const TempReservation = () => {

    const [selectedDate, setSelectedDate] = useState(null)
    const [clock, setClock] = useState("08:00")

    // Asset
    const today = new Date()
    const tomorrow = new Date(today)
    tomorrow.setDate(tomorrow.getDate() + 1)
    const clocks = ["08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22"]

    const reserveBookHandler = () => { }

    return (
        <div className="container-fluid my-5">
            <div className="container">
                <div className="reservation position-relative overlay-top overlay-bottom">
                    <div className="row align-items-center">
                        <div className="col-lg-6 my-5 my-lg-0">
                            <div className="p-5">
                                <div className="mb-4">
                                    <h1 className="display-3 text-primary">30% OFF</h1>
                                    <h1 className="text-white">For Online Reservation</h1>
                                </div>
                                <p className="text-white">Lorem justo clita erat lorem labore ea, justo dolor lorem ipsum ut sed eos,
                                    ipsum et dolor kasd sit ea justo. Erat justo sed sed diam. Ea et erat ut sed diam sea</p>
                                <ul className="list-inline text-white m-0">
                                    <li className="py-2"><FontAwesomeIcon icon={faCheck} className="text-primary mr-3" /> Lorem ipsum dolor sit amet</li>
                                    <li className="py-2"><FontAwesomeIcon icon={faCheck} className="text-primary mr-3" /> Lorem ipsum dolor sit amet</li>
                                    <li className="py-2"><FontAwesomeIcon icon={faCheck} className="text-primary mr-3" /> Lorem ipsum dolor sit amet</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="text-center p-5" style={{ background: "rgba(51, 33, 29, .8)" }}>
                                <h1 className="text-white mb-4 mt-5">Book Your Table</h1>
                                <form className="mb-5">
                                    <div className="form-group">
                                        <input type="text" className="form-control bg-transparent border-primary p-4" placeholder="Full Name"
                                            required="required" />
                                    </div>
                                    <div className="form-group">
                                        <input type="email" className="form-control bg-transparent border-primary p-4" placeholder="Email"
                                            required="required" />
                                    </div>
                                    <div className="form-group">

                                        <DatePicker
                                            selected={selectedDate}
                                            onChange={(date) => setSelectedDate(date)}
                                            dateFormat="yyyy/MM/dd"
                                            placeholderText="Choose Date"
                                            minDate={tomorrow}
                                            className="form-control bg-transparent border-primary p-4 datetimepicker-input"
                                        />

                                    </div>
                                    <div className="form-group d-flex border-primary">

                                        <select>
                                            {
                                                clocks.map(item => (
                                                    <option value={item}>{item}</option>
                                                ))
                                            }
                                        </select>

                                        <select>
                                            <option value="15">00</option>
                                            <option value="15">15</option>
                                            <option value="30">30</option>
                                            <option value="45">45</option>
                                        </select>

                                        <select>
                                            <option value="AM">AM</option>
                                            <option value="PM">PM</option>
                                        </select>

                                    </div>
                                    <div className="form-group">
                                        <select className="custom-select bg-transparent border-primary px-4" style={{ height: "49px" }}>
                                            <option selected>Person</option>
                                            <option value="1">Person 1</option>
                                            <option value="2">Person 2</option>
                                            <option value="3">Person 3</option>
                                            <option value="4">Person 4</option>
                                        </select>
                                    </div>

                                    <div>
                                        <button className="btn btn-primary btn-block font-weight-bold py-3" onClick={reserveBookHandler}>Book Now</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TempReservation