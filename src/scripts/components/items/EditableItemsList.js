import React, { PropTypes } from 'react'
import EditableItem from './EditableItemContainer'

const EditableItemsList = ({ items }) => (
    <ul className="list-unstyled">
        {items.map(item => (
            <li key={`editable-item-${item._id}`}>
                <EditableItem item={item} />
            </li>
        ))}
    </ul>
)

EditableItemsList.propTypes = {
    items: PropTypes.array.isRequired
}

export default EditableItemsList
