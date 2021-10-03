import React from 'react'

import './dropdownMenu.css'

const DropdownMenu = props => {

    const handleClickFn = event => {
        const byName = item => item.name === event.target.textContent
        const item = props.items.find(byName)

        props.defaultItemClickHandler(event, item)
        item.handleClickFn(event, item)
    }

    const renderDropdownMenuItemButton = item => (
        <button
            onClick={handleClickFn}>
            {item.name}
        </button>
    )

    const renderDropdownMenuItem = item => (
        <li
            className={item.name.toLowerCase()}
            key={item.name.toLowerCase()}>
                {renderDropdownMenuItemButton(item)}
        </li>
    )

    return (
        <div
            className={`
                dropdownMenu
                ${props.state ? 'open' : ''}
                ${props.extraCssClasses?.join(' ') ?? ''}
            `}>

            <ul>
                {props.items.map(renderDropdownMenuItem)}
            </ul>
        </div>
    )
}

export default DropdownMenu
