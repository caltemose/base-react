import React, { PropTypes } from 'react'

const FlashMessage = ({ msg, error = false }) => {
    const classes = error ? 'flash-message error' : 'flash-message'
    return <div className={classes}>{msg}</div>
}

FlashMessage.propTypes = {
    msg: PropTypes.string.isRequired,
    error: PropTypes.bool
}

export default FlashMessage
