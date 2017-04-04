import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { requestEditItem, requestDeleteItem } from '../store/actions/actions'
import ItemForm from '../components/ItemForm'

const EditableItem = ({ item, requestEditItem, requestDeleteItem }) => {
    const handleSubmit = (value) => {
        requestEditItem(item._id, value)
    }

    const handleDelete = (id) => {
        requestDeleteItem(id)
    }

    return (
        <ItemForm
            id={item._id}
            defaultValue={item.name}
            onSubmit={handleSubmit}
            onDelete={handleDelete}
            buttonText="Edit Item"
            error={item.error}
            disabled={item.pending}
            showDelete={true}
        />
    )
}

EditableItem.propTypes = {
    item: PropTypes.object.isRequired,
    requestEditItem: PropTypes.func.isRequired,
    requestDeleteItem: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = { requestEditItem, requestDeleteItem }

export default connect(mapStateToProps, mapDispatchToProps)(EditableItem)
