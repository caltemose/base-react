import React, { PropTypes } from 'react'
import CreateItem from '../containers/CreateItem'
import EditableItems from '../containers/EditableItems'

const Items = ({ items }) => (
    <main>
        <h1>Items</h1>

        <EditableItems />

        <CreateItem />
    </main>
)

Items.propTypes = {
    items: PropTypes.array.isRequired
}

export default Items
