import React, { useState, useEffect } from 'react'

import Layout from './components/Layout/Layout'
import TopBar from './components/Layout/TopBar'
import ScrollableContent from './components/Layout/ScrollableContent'

import './app.css'

const App = () => {

    const [words, setWords] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`${process.env.PUBLIC_URL}/words.json`)
            const wordList = await response.json()
            setWords(wordList)
        }

        fetchData()
    }, [])

    return (
        <Layout>
            <TopBar
                words={words} />
            <ScrollableContent
                words={words} />
        </Layout>
    )
}

export default App
