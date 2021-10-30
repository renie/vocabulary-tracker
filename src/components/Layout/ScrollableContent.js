import WordList from '../WordList'

import './topBar.css'

const ScrollableContent = props => (
    <section className="scrollable-content">
        <WordList
            words={props.words}
            handleWordClick={props.handleWordClick} />
    </section>
)

export default ScrollableContent
