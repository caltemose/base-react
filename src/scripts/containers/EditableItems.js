import React from 'react'
import { connect } from 'react-redux'
import { requestEditItem } from '../store/actions/actions'
import EditableItemsList from '../components/EditableItemsList'

const EditableItems = ({ items }) => (
    <EditableItemsList
        items={items}
        requestEditItem={requestEditItem} />
)

const mapStateToProps = (state) => ({
    items: state.items
})

const mapDispatchToProps = { requestEditItem }

export default connect(mapStateToProps, mapDispatchToProps)(EditableItems)
