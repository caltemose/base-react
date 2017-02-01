import React, { PropTypes, Component } from 'react'

class CreateItemForm extends Component {
    static propTypes = {
        requestCreateItem: PropTypes.func.isRequired,
        creatingItem: PropTypes.bool,
        createItemError: PropTypes.string
    }

    handleSubmit = (event) => {
        event.preventDefault()

        if (this.props.creatingItem) return;

        // TODO add validation so we don't submit empty/illegal values
        const name = this.input.value

        this.props.requestCreateItem(name)
    }

    render () {
        const classes = this.props.creatingItem ? 'create-item-form disabled' : 'create-item-form'
        return (
            <form className={classes} onSubmit={this.handleSubmit}>
                {this.props.createItemError &&
                    <span className="form-message error">{this.props.createItemError}</span>}
                <label>
                    Create new item:
                    <input type="text" placeholder="item name here" name="itemName" size="20" ref={node => this.input = node} />
                </label>
                <button type="submit">Create Item</button>
            </form>
        )
    }
}

export default CreateItemForm
