import React from 'react'
import { connect } from 'react-redux'
import { getItems } from '../../store/store'
import EditableItemsList from './EditableItemsList'

const EditableItemsContainer = ({ items }) => (
    <EditableItemsList items={items} />
)

const mapStateToProps = (state) => ({
    items: getItems(state)
})

export default connect(mapStateToProps)(EditableItemsContainer)
