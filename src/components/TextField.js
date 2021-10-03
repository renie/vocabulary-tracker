import './textField.css'

const TextField = props => (
    <input
        type="text"
        placeholder={props.placeHolder}
        className={`text-field ${props.extraCssClasses?.join(' ') ?? ''}`}
        onKeyUp={props.handleChangeSearchFn} />
)

export default TextField
