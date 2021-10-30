import './modal.css'

const Modal = props => {
    return (
        <>
            <div
                className={`modalContent ${props.state}`}>
                {props.children}
                <a 
                    href="#"
                    className='modalCLosedBtn'
                    onClick={props.handleClose}>×</a>
            </div>

            <div 
                className={`modalMask ${props.state}`}
                onClick={props.handleClose}></div>
            
        </>
    )
}

export default Modal