import route from "@/data/routes"
import datas from "@/data/db.json"
import TempMenu from "@/components/template/TempMenu/TempMenus"

const search = ({ searchResult }) => {
    return (
        <TempMenu menus={searchResult} />
    )
}

export default search

export const getServerSideProps = async (context) => {

    const { query } = context
    const queryParam = query?.q ? query.q.toLowerCase() : 'coffee'

    let searchResult = []
    let searchData = []

    try {

        const res = await fetch(`${route}menus`)
        const data = await res.json()

        searchResult = data.filter(
            item =>
                (item.type.toLowerCase()).includes(queryParam)
                ||
                (item.title.toLowerCase()).includes(queryParam))

    } catch (err) {
        // codes
    }

    if (!searchResult.lenght) {
        searchData = datas.menus.filter(
            item =>
                (item.type.toLowerCase()).includes(queryParam)
                ||
                (item.title.toLowerCase()).includes(queryParam))
    }

    return {
        props: {
            searchResult: searchResult.lenght ? searchResult : searchData
        }
    }
}