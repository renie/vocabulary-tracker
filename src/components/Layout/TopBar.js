import SearchBar from '../SearchBar'

import './topBar.css'

const TopBar = props => (
    <section className="top-bar">
        <SearchBar
            words={props.words} />
    </section>
)

export default TopBar
