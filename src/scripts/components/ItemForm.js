import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'

// TODO empty the input when onCreateItem succeeds

class ItemForm extends Component {
    static propTypes = {
        id: PropTypes.string,
        defaultValue: PropTypes.string,
        onSubmit: PropTypes.func.isRequired,
        onDelete: PropTypes.func,
        error: PropTypes.string,
        disabled: PropTypes.bool,
        buttonText: PropTypes.string,
        showDelete: PropTypes.bool,
    }

    static defaultProps = {
        id: undefined,
        defaultValue: '',
        error: undefined,
        disabled: false,
        buttonText: 'Submit',
        onDelete: () => {},
        showDelete: false
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.onSubmit(this.input.value)
    }

    handleDelete = (event) => {
        event.preventDefault()
        this.props.onDelete(this.props.id)
    }

    render () {
        const {
            defaultValue,
            error,
            disabled,
            buttonText,
            showDelete
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

                {showDelete &&
                    <button 
                        className="item-delete-button"
                        onClick={this.handleDelete}
                    >Delete Item</button>}

                {error &&
                    <span className="input-message error">{error}</span>}
            </form>
        )
    }
}

export default ItemForm
