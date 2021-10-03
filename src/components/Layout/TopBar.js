import SearchBar from '../SearchBar'

import './topBar.css'

const TopBar = props => (
    <section className="top-bar">
        <SearchBar
            words={props.words}
            handleChangeSearchFn={props.handleChangeSearchFn}
            handleChangeWordClassSelectedFn={props.handleChangeWordClassSelectedFn} />
    </section>
)

export default TopBar
