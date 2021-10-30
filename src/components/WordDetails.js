import Modal from './Layout/Modal'

import './wordDetails.css'

const WordDetails = props => {

    const getBody = word => (
        <p>
            {word.translation}
        </p>
    )

    const getHeader = word => (
        <h1>
            {word.word}<br />
            <small>{word.wordClass}</small>
        </h1>
    )

    return (
        <Modal
            state={props.state}
            handleClose={props.handleClose}>
            {getHeader(props.word)}
            {getBody(props.word)}
        </Modal>
    )
}
export default WordDetails