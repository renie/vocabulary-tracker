import React, { useState } from 'react'
import Button from './Button'
import DropdownMenu from './DropdownMenu'

import './wordClassSelector.css'

const WordClassSelector = props => {

    const [dropdownState, setDropdownState] = useState(false)
    const [buttonText, setButtonText] = useState(props.wordClasses[0]?.name ?? '')

    const changeDropdownMenu = state =>
        setDropdownState(state)

    const toggleDropdownMenu = () =>
        changeDropdownMenu(!dropdownState)

    const closeDropdownMenu = () =>
        changeDropdownMenu(false)

    const dropdownMenuItemClickHandler = ({target}, item) => {
        setButtonText(item.name)
        closeDropdownMenu()
    }

    return (
        <>
            <Button
                text={buttonText}
                extraCssClasses={[buttonText.toLowerCase()]}
                handleClickFn={toggleDropdownMenu} />

            <DropdownMenu
                items={props.wordClasses}
                state={dropdownState}
                defaultItemClickHandler={dropdownMenuItemClickHandler}
                extraCssClasses={['word-class-selector']} />
        </>
    )
}

export default WordClassSelector
