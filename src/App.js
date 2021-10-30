import React, { useState, useEffect } from 'react'

import Layout from './components/Layout/Layout'
import TopBar from './components/Layout/TopBar'
import ScrollableContent from './components/Layout/ScrollableContent'

import './app.css'

const App = () => {

    const [words, setWords] = useState([])
    const [filteredWords, setFilteredWords] = useState([])
    const [searchTerm, setSearchTerm] = useState('')
    const [selectedWordClass, setSelectedWordClass] = useState('all')

    const alphabetically = (a, b) =>
        a.word.localeCompare(b.word)

    const filterWord = word => (
        word.word.toLowerCase().includes(searchTerm) ||
        word.translation.toLowerCase().includes(searchTerm)
    )

    const filterWordClass = word => (
        selectedWordClass === 'all'
            ? true
            : word.wordClass === selectedWordClass
    )

    const getEnabledFilters = () => {
        const filters = []
        const search = searchTerm.trim()

        if (selectedWordClass) filters.push(filterWordClass)
        if (search) filters.push(filterWord)

        return filters
    }

    const multipleFilter = (arr, filterList) => (
        filterList.length
            ? filterList.reduce((list, filter) => list.filter(filter), arr)
            : arr
    )

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`${process.env.PUBLIC_URL}/words.json`)
            const wordList = (await response.json()).sort(alphabetically)
            setWords(wordList)
            setFilteredWords(wordList)
        }

        fetchData()
    }, [])

    useEffect(
        () => setFilteredWords(multipleFilter([...words], getEnabledFilters())),
        [searchTerm, selectedWordClass])

    const handleChangeSearch = ({target}) =>
        setSearchTerm(target.value.toLowerCase())

    const handleChangeWordClassSelected = (_, item) =>
        setSelectedWordClass(item.name)

    const handleWordClick = word => 
        console.log(word)
    

    return (
        <Layout>
            <TopBar
                words={words}
                handleChangeSearchFn={handleChangeSearch}
                handleChangeWordClassSelectedFn={handleChangeWordClassSelected} />
            <ScrollableContent
                words={filteredWords}
                handleWordClick={handleWordClick} />
        </Layout>
    )
}

export default App
