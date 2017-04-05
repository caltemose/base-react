import React from 'react'
import { connect } from 'react-redux'
import EditableItemsList from './EditableItemsList'

const EditableItemsContainer = ({ items }) => (
    <EditableItemsList items={items} />
)

const mapStateToProps = (state) => ({
    items: state.items.items
})

export default connect(mapStateToProps)(EditableItemsContainer)
