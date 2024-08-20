import ServiceCard from "@/components/modules/ServiceCard/ServiceCard"
import datas from "@/data/db.json"

const TempService = ({ services }) => {

    return (
        <div className="container-fluid pt-5">
            <div className="container">
                <div className="section-title">
                    <h4 className="text-primary text-uppercase" style={{ letterSpacing: "5px" }}>Our Services</h4>
                    <h1 className="display-4">Fresh & Organic Beans</h1>
                </div>
                <div className="row">
                    {
                        services.lenght
                            ?
                            services.map(item => (
                                <ServiceCard key={item.index} {...item} />
                            ))
                            :
                            datas.services.map(item => (
                                <ServiceCard key={item.index} {...item} />
                            ))
                    }
                </div>
            </div>
        </div>
    )
}

export default TempService