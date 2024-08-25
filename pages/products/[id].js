import route from "@/data/routes"
import datas from '@/data/db.json'

export default function ProductInfo({ product }) {

    const { img, price, title, desc, off, type } = product

    return (
        <>
            <div className="row align-items-center justify-content-center testy_" style={{ backgroundColor: 'rgb(24, 26,27)', color: 'whitesmoke', padding: '15rem 1rem 6rem 1rem' }}>
                <div className="d-flex align-items-center" style={{ width: '800px' }}>
                    <div className="mr-3">
                        <img className="mb-3 mb-sm-0 rounded" src={img} alt="card" width={350} />
                    </div>
                    <div>
                        <h4 style={{ fontSize: '3.5rem', fontWeight: 'bold', color: '#DA9F5B' }}>
                            {title}
                        </h4>
                        <p style={{ color: 'skyblue' }}>{type.toUpperCase()} Drink</p>
                        <p className="m-0 mb-4" style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>{desc}</p>
                        {
                            off !== 0
                                ?
                                <>
                                    <del className="mr-3" style={{ fontSize: '1.7rem' }}>${price}</del>
                                    <span style={{ fontSize: '2.7rem', color: '#DA9F5B' }}>${price - (price * off) / 100}</span>
                                </>
                                :
                                <p>${price}</p>
                        }
                        <p></p>

                    </div>
                </div>
            </div>



        </>
    )
}

export async function getStaticPaths() {

    const res = await fetch(`${route}menus`);
    const data = await res.json();

    const products = data.slice(0, 3).map(item => {
        return { params: { id: String(item.id) } }
    })

    return {
        paths: products,
        fallback: "blocking"
    }
}


export async function getStaticProps(context) {

    const productID = context.params.id
    let product = null

    try {

        const res = await fetch(`${route}menus`)
        const data = await res.json()
        product = data.find(item => item.id === productID)

    } catch (err) {
        //codes
    }

    if (product === null) product = datas.find(item => item.id === productID)
    else if (!product) {
        return {
            notFound: true,
        }
    }

    return {
        props: {
            product,
        },
        revalidate: 24 * 60 * 60, // 86400 seconds
    }
}
