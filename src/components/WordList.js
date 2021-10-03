import './wordList.css'

const WordList = props => {
    const renderWordListItem = (word, index) => (
        <li
            className={word.wordClass}
            key={index}>
            <h3 className="word">{word.word}</h3>
            <h5 className="cursive">{word.word}</h5>
            <h4 className="translation">{word.translation}</h4>
        </li>
    )

    const alphabetically = (a, b) =>
        a.word.localeCompare(b.word)

    return (
        <ul className="word-list">
            {[...props.words].sort(alphabetically).map(renderWordListItem)}
        </ul>
    )
}

export default WordList
