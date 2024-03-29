import React from 'react'

import SearchInput from './SearchInput'
import WordClassSelector from './WordClassSelector'

import './searchBar.css'


const SearchBar = props => {
    const getWordClasses = () => {
        const wordClassesMapped = props.words.map(word => word.wordClass)
        const sortedWordClasses = [...new Set(wordClassesMapped)].sort()
        return ['all', ...sortedWordClasses]
    }

    const genereteItems = wordClass => ({
        name: wordClass,
        handleClickFn: props.handleChangeWordClassSelectedFn
    })

    const wordClassesItems = getWordClasses().map(genereteItems)

    return (
        <div className="search-bar">
            <SearchInput
                handleChangeSearchFn={props.handleChangeSearchFn} />
            <WordClassSelector
                wordClasses={wordClassesItems} />
        </div>
    )
}

export default SearchBar
