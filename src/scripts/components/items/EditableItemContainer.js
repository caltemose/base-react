import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { requestEditItem, requestDeleteItem } from '../../store/actions/actions'
import ItemForm from './ItemForm'

class EditableItemContainer extends Component {
    static propTypes = {
        item: PropTypes.object.isRequired,
        requestEditItem: PropTypes.func.isRequired,
        requestDeleteItem: PropTypes.func.isRequired
    }

    state = {
        value: this.props.item.name || ''
    }

    handleChange = (value) => {
        if (value !== this.state.value) {
            this.setState({ value })
        }
    }

    handleSubmit = () => {
        this.props.requestEditItem(this.props.item._id, this.state.value)
    }

    handleDelete = () => {
        this.props.requestDeleteItem(this.props.item._id)
    }

    render () {
        const { item } = this.props
        return (
            <ItemForm
                id={item._id}
                value={this.state.value}
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                onDelete={this.handleDelete}
                buttonText="Edit Item"
                error={item.error}
                disabled={item.pending}
                showDelete={true}
            />
        )
    }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = { requestEditItem, requestDeleteItem }

export default connect(mapStateToProps, mapDispatchToProps)(EditableItemContainer)
