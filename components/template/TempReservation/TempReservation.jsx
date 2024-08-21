import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faCheck
} from "@fortawesome/free-solid-svg-icons"
// assets
import route from "@/data/routes"
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { emailIsValid } from "@/validation/regex"

const TempReservation = () => {

    const [selectedDate, setSelectedDate] = useState(null)
    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [countPerson, setCountPerson] = useState("1")
    // clock
    const [hours, setHours] = useState("08")
    const [minute, setMinute] = useState("00")
    const [time, setTime] = useState("AM")

    // Helps
    const today = new Date()
    const tomorrow = new Date(today)
    tomorrow.setDate(tomorrow.getDate() + 1)
    const clocks = ["08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22"]

    const reserveBookHandler = async e => {
        e.preventDefault()
        // codes
        if (emailIsValid(email) && fullName.length > 7 && selectedDate !== null) {

            try {

                const dateStr = String(selectedDate).slice(0, 15)
                const date = new Date(dateStr)
                const day = date.getDate()
                const month = date.getMonth() + 1
                const year = date.getFullYear()
                const formattedDate = `${year}/${month}/${day}`;


                const res = await fetch(`${route}reserve`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        fullName,
                        email,
                        date: `${formattedDate}`,
                        time: `${hours}:${minute} ${time}`,
                        RequestDate: `${date.getFullYear()}/${date.getMonth() + 1}/${String(today).slice(8, 10)}`,
                        RequestTime: `${today.getHours()}:${today.getMinutes()}`,
                        countPerson
                    })
                })

                res.status === 201 ? alert('SUCCESS') : alert('ERROR')

            } catch (err) {
                // codes
            }

            setSelectedDate(null)
            setFullName("")
            setEmail("")
            setHours("08")
            setMinute("00")
            setTime("AM")

        } else {
            alert('please format true')
        }
    }

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
                                        <input value={fullName} onChange={e => setFullName(e.target.value)} type="text" className="form-control bg-transparent border-primary p-4" placeholder="Full Name"
                                            required="required" />
                                    </div>
                                    <div className="form-group">
                                        <input value={email} onChange={e => setEmail(e.target.value)} type="email" className="form-control bg-transparent border-primary p-4" placeholder="Email"
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

                                        <select onChange={e => setHours(e.target.value)}>
                                            {
                                                clocks.map(item => (
                                                    <option value={item} selected={item === "08" && true}>{item}</option>
                                                ))
                                            }
                                        </select>

                                        <select onChange={e => setMinute(e.target.value)}>
                                            <option value="00" selected>00</option>
                                            <option value="15">15</option>
                                            <option value="30">30</option>
                                            <option value="45">45</option>
                                        </select>

                                        <select onChange={e => setTime(e.target.value)}>
                                            <option value="AM" selected>AM</option>
                                            <option value="PM">PM</option>
                                        </select>

                                    </div>
                                    <div className="form-group">
                                        <select onChange={e => setCountPerson(e.target.value)} className="custom-select bg-transparent border-primary px-4" style={{ height: "49px" }}>
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