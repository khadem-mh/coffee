import CommentUser from "@/components/modules/CommentUser/CommentUser"
import datas from "@/data/db.json"

const TempTestimonial = ({ comments }) => {
    return (
        <div className="container-fluid py-5">
            <div className="container">
                <div className="section-title">
                    <h4 className="text-primary text-uppercase" style={{ letterSpacing: "5px" }}>Testimonial</h4>
                    <h1 className="display-4">Our Clients Say</h1>
                </div>
                <div className="owl-carousel testimonial-carousel">

                    {
                        comments.length
                            ?
                            comments.map((item, index) => (
                                <CommentUser key={index} {...item} />
                            ))
                            :
                            datas.comments.map((item, index) => (
                                <CommentUser key={index} {...item} />
                            ))
                    }

                </div>
            </div>
        </div>
    )
}

export default TempTestimonial