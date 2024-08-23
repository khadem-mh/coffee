import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faSearch
} from "@fortawesome/free-solid-svg-icons"

const GlobalSearch = ({ value, setValue, onClickSearch }) => {

    const clickHandlerSearch = () => value.trim().length && onClickSearch()

    return (
        <div className="global-search__parent">
            <input type="text" value={value} onChange={e => setValue(e.target.value)} className="global-search__input" placeholder="search..." />
            <FontAwesomeIcon icon={faSearch} className="global-search__icon" onClick={clickHandlerSearch} />
        </div>
    )
}

export default GlobalSearch