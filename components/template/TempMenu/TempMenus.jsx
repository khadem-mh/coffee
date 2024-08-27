import DrinkCard from "@/components/modules/DrinkCard/DrinkCard"
import datas from '@/data/db.json'

const TempMenu = ({ menus }) => {

    let hotCoffee = []
    let coldCoffee = []

    const filterMenus = (menu, type) => menu.filter(item => item.type === type)

    if (menus && menus.length) {
        hotCoffee = filterMenus(menus, 'hot')
        coldCoffee = filterMenus(menus, 'cold')
    } else {
        hotCoffee = filterMenus(datas.menus, 'hot')
        coldCoffee = filterMenus(datas.menus, 'cold')
    }

    return (
        <div className="container-fluid pt-5">
            <div className="container">
                <div className="section-title">
                    <h4 className="text-primary text-uppercase" style={{ letterspacing: "5px" }}>Menu & Pricing</h4>
                    <h1 className="display-4">Competitive Pricing</h1>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <h1 className="mb-5">Hot Coffee</h1>

                        {
                            hotCoffee && hotCoffee.length ?
                                hotCoffee.slice(0, 3).map(item => (
                                    <DrinkCard key={item.id} {...item} />
                                ))
                                :
                                <p style={{ fontSize: '2rem', }}>φ Not Found</p>
                        }

                    </div>
                    <div className="col-lg-6">
                        <h1 className="mb-5">Cold Coffee</h1>

                        {
                            coldCoffee && coldCoffee.length ?
                                coldCoffee.slice(0, 3).map(item => (
                                    <DrinkCard key={item.id} {...item} />
                                ))
                                :
                                <p style={{ fontSize: '2rem', }}> φ Not Found</p>
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}

export default TempMenu