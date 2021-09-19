const WORD_CLASS_LIST = [...new Set(words.map(word => word.wordClass))]
const getWordClassSelector = () => document.querySelector(".word-class-selector")
const getWordClassSelectorBtn = () => document.querySelector(".word-class-selector-btn")
const getWordClassListSelector = () => document.querySelector(".word-class-list")
const getWordList = () => document.querySelector(".word-list")
const getWordListItems = () => [...document.querySelectorAll(".word-list .item")]
const getSearchInput = () => document.querySelector(".search-input")

const filterWordClass = (wordClass) => (word) =>
    wordClass === 'all' ? true : word.wordClass === wordClass

const filterWord = (piece) => (word) => (
    word.word.toLowerCase().includes(piece) ||
    word.translation.toLowerCase().includes(piece)
)

const getSortedWordList = (wordList = words) =>
    wordList.sort((a, b) => a.word.localeCompare(b.word))

const multipleFilter = (arr, filterList) =>
    filterList.length
        ? filterList.reduce((list, filter) => list.filter(filter), arr)
        : arr

const generateWordListHTML = (filters = []) =>
    multipleFilter(getSortedWordList(), filters)
        .map(word => `
            <li class="item ${word.wordClass}">
                <h3 class="word">${word.word}</h3>
                <h5 class="cursive">${word.word}</h5>
                <h4 class="translation">${word.translation}</h4>
            </li>
        `).join('')

const generateWordClassListHTML = () => {
    const wordClassList = [...WORD_CLASS_LIST].sort()
    wordClassList.push('all')
    return wordClassList
        .map(wordClass => `
            <li class="word-class-item ${wordClass}">
                <button>${wordClass}</button>
            </li>
        `).join('')
}

const toggleWordClassSelector = (changeWordList = true) => {
    getWordClassSelector().classList.toggle('open');
    if (!changeWordList) return false
    getWordListItems().forEach(item => item.classList.toggle('blur'))
}

const changeButtonColor = (selectedWordClass) => {
    const btn = getWordClassSelectorBtn()
    WORD_CLASS_LIST.forEach(styleClass => btn.classList.remove(styleClass))
    btn.classList.add(selectedWordClass)
    btn.dataset.selectedWordClass = selectedWordClass
    btn.textContent = selectedWordClass.substring(0, 3)
    toggleWordClassSelector(false)
}

const changeSelectedWordClass = (e) => {
    if (e.target.nodeName.toLowerCase() !== 'button') return false

    changeButtonColor(e.target.textContent.toLowerCase())
    populateWordList(getEnabledFilters())
}

const getEnabledFilters = () => {
    const filters = []

    const wordClass = getWordClassSelectorBtn().dataset.selectedWordClass
    const search = getSearchInput().value.trim()

    if (wordClass) filters.push(filterWordClass(wordClass))
    if (search) filters.push(filterWord(search))

    return filters
}

const findWord = () =>
    populateWordList(getEnabledFilters())

const populateWordList = (filters = []) =>
    getWordList().innerHTML = generateWordListHTML(Array.isArray(filters)?filters:[filters])

const populateWordClassList = () =>
    getWordClassListSelector().innerHTML = generateWordClassListHTML()

const addWordClassSelectorListener = () =>
    getWordClassSelector().addEventListener('click', changeSelectedWordClass)

const addWordClassSelectorBtnListener = () =>
    getWordClassSelectorBtn().addEventListener('click', toggleWordClassSelector)

const addSearchInputListener = () =>
    getSearchInput().addEventListener('keyup', findWord)

;(() => {
    addWordClassSelectorListener()
    addWordClassSelectorBtnListener()
    addSearchInputListener()

    populateWordList()
    populateWordClassList()

})()
