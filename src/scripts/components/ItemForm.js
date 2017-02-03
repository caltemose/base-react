import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'

// TODO empty the input when onCreateItem succeeds

class ItemForm extends Component {
    static propTypes = {
        defaultValue: PropTypes.string,
        onSubmit: PropTypes.func.isRequired,
        error: PropTypes.string,
        disabled: PropTypes.bool,
        buttonText: PropTypes.string
    }

    static defaultProps = {
        defaultValue: '',
        disabled: false,
        buttonText: 'Submit'
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.onSubmit(this.input.value)
    }

    render () {
        const {
            defaultValue,
            error,
            disabled,
            buttonText
        } = this.props

        const formClasses = classnames({
            'item-form': true,
            'disabled': disabled
        })

        const labelClasses = classnames({'error': error})

        return (
            <form className={formClasses} onSubmit={this.handleSubmit}>
                <label className={labelClasses}>
                    <input
                        type="text"
                        placeholder="item name here"
                        size="25"
                        defaultValue={defaultValue}
                        ref={node => this.input = node}
                    />
                </label>
                <button type="submit">{buttonText}</button>
                {error &&
                    <span className="input-message error">{error}</span>}
            </form>
        )
    }
}

export default ItemForm
