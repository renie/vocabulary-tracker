import './wordList.css'

const WordList = props => {

    const byWord = wordToSearchFor => 
        word => word.word === wordToSearchFor

    const handleWordClick = e => {
        const wordId = e.target.dataset.wordId
        const word = props.words.find(byWord(wordId))
        props.handleWordClick(word)
    }

    const getWordIdString = word => word.word.trim().toLowerCase()

    const renderWordListItem = (word, index) => (
        <li
            className={word.wordClass}
            key={index}> 
            <a 
                href={`#${getWordIdString(word)}`}
                data-word-id={word.word}
                onClick={handleWordClick}>
                <h3 className="word">{word.word}</h3>
                <h5 className="cursive">{word.word}</h5>
                <h4 className="translation">{word.translation}</h4>
            </a>
        </li>
    )

    return (
        <ul className="word-list">
            {[...props.words].map(renderWordListItem)}
        </ul>
    )
}

export default WordList
