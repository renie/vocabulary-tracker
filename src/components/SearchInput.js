import TextField from './TextField'

import './searchInput.css'

const SearchInput = props => {
    return (
        <TextField
            extraCssClasses={['search-input']}
            handleChangeSearchFn={props.handleChangeSearchFn} />
    )
}

export default SearchInput
