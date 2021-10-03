import WordList from '../WordList'

import './topBar.css'

const ScrollableContent = props => (
    <section className="scrollable-content">
        <WordList
            words={props.words} />
    </section>
)

export default ScrollableContent
