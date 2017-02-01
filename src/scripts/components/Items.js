import React, { PropTypes } from 'react'

const Items = ({ items }) => (
    <main>
        <h1>Items</h1>
        <ul>
            {items.map(item => (
                <li key={item._id}>
                    {item.name}
                </li>
            ))}
        </ul>
    </main>
)

Items.propTypes = {
    items: PropTypes.array.isRequired
}

export default Items
