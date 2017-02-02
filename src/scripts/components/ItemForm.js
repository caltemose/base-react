import React, { Component, PropTypes } from 'react'

// TODO empty the input when onCreateItem succeeds
// TODO add disabling to form during API request to create/edit
// TODO add error display when API calls fail

class ItemForm extends Component {
    static propTypes = {
        item: PropTypes.object,
        onEditItem: PropTypes.func,
        onCreateItem: PropTypes.func
    }

    handleSubmit = (event) => {
        event.preventDefault()

        if (this.props.item && this.props.onEditItem) {
            this.props.onEditItem(this.props.item._id, this.input.value)

        } else if (this.props.onCreateItem) {
            this.props.onCreateItem(this.input.value)
        }
    }

    render () {
        const { item, onEditItem, onCreateItem } = this.props

        // eject if props are missing
        // TODO can this kind of optional setup be handled by PropTypes?
        if (!item && !onEditItem && !onCreateItem) return

        // handle differences between create/edit modes
        // TODO input/conditionals below can be optimized to be DRYer
        let input, buttonText
        if (item && onEditItem) {
            input = <input
                type="text"
                placeholder="item name here"
                size="20"
                defaultValue={item.name}
                ref={node => this.input = node} />
            buttonText = "Edit Item"

        } else if (onCreateItem) {
            input = <input
                type="text"
                placeholder="item name here"
                size="20"
                ref={node => this.input = node} />
            buttonText = "Create Item"
        }

        if ((item && onEditItem) || onCreateItem) {
            return (
                <form className='item-form' onSubmit={this.handleSubmit}>
                    <label>
                        {input}
                    </label>
                    <button type="submit">{buttonText}</button>
                </form>
            )
        }
    }
}

export default ItemForm
