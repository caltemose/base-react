import React, { PropTypes } from 'react'
import CreateItemContainer from '../components/items/CreateItemContainer'
import EditableItemsContainer from '../components/items/EditableItemsContainer'

const Items = ({ items }) => (
    <main>
        <h1>Items</h1>

        <EditableItemsContainer />

        <CreateItemContainer />
    </main>
)

Items.propTypes = {
    items: PropTypes.array.isRequired
}

export default Items
