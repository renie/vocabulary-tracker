import WordList from '../WordList'
import WordDetails from '../WordDetails'

import './topBar.css'

const ScrollableContent = props => (
    <>
        <section className="scrollable-content">
            <WordList
                words={props.words}
                handleWordClick={props.handleWordClick} />
        </section>
        <WordDetails
            word={props.selectedWord}
            state={props.wordDetailsState}
            handleClose={props.handleWordDetailClose}></WordDetails>
    </>
)

export default ScrollableContent
