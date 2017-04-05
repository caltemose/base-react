import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'

class ItemForm extends Component {
    static propTypes = {
        value: PropTypes.string,
        onChange: PropTypes.func.isRequired,
        onSubmit: PropTypes.func.isRequired,
        onDelete: PropTypes.func,
        error: PropTypes.string,
        disabled: PropTypes.bool,
        buttonText: PropTypes.string,
        showDelete: PropTypes.bool,
    }

    static defaultProps = {
        value: '',
        onDelete: () => {},
        error: undefined,
        disabled: false,
        buttonText: 'Submit',
        showDelete: false
    }

    handleChange = (event) => {
        event.preventDefault()
        this.props.onChange(event.target.value)
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.onSubmit()
    }

    handleDelete = (event) => {
        event.preventDefault()
        this.props.onDelete()
    }

    render () {
        const {
            value,
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
                        value={value}
                        onChange={this.handleChange}
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
