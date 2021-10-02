import React, { useState,  useEffect} from 'react'

import SearchInput from './SearchInput'
import WordClassSelector from './WordClassSelector'
import Words from '../words'

import './searchBar.css'


const SearchBar = () => {

    const getWordClasses = () => {
        const wordClassesMapped = Words.map(word => word.wordClass)
        const sortedWordClasses = [...new Set(wordClassesMapped)].sort()
        return ['all', ...sortedWordClasses]
    }

    const genereteItems = wordClass => ({
        name: wordClass,
        handleClickFn: ({target}, item) => console.log(`>>> ${item.name}`)
    })

    const wordClassesItems = getWordClasses().map(genereteItems)

    return (
        <div className="search-bar">
            <SearchInput />
            <WordClassSelector
                wordClasses={wordClassesItems} />
        </div>
    )
}

export default SearchBar
