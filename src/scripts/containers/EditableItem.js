import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { requestEditItem } from '../store/actions/actions'
import ItemForm from '../components/ItemForm'

const EditableItem = ({ item, requestEditItem }) => {
    const handleSubmit = (value) => {
        requestEditItem(item._id, value)
    }

    return (
        <ItemForm
            defaultValue={item.name}
            onSubmit={handleSubmit}
            buttonText="Edit Item"
        />
    )
}

EditableItem.propTypes = {
    item: PropTypes.object.isRequired,
    requestEditItem: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = { requestEditItem }

export default connect(mapStateToProps, mapDispatchToProps)(EditableItem)
