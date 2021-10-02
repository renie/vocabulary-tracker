import './button.css'

const Button = props => (
    <button
        className={`button ${props.extraCssClasses?.join(' ') ?? ''}`}
        onClick={props.handleClickFn}>
        {props.text}
    </button>
)


export default Button
