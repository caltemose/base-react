import React from 'react'
import { connect } from 'react-redux'
import { requestCreateItem } from '../store/actions/actions'
import CreateItemForm from '../components/CreateItemForm'

const CreateItem = ({ requestCreateItem, creatingItem, createItemError }) => (
    <CreateItemForm
        requestCreateItem={requestCreateItem}
        creatingItem={creatingItem}
        createItemError={createItemError} />
)

const mapStateToProps = (state) => ({
    creatingItem: state.items.creatingItem,
    createItemError: state.items.createItemError
})

const mapDispatchToProps = {
    requestCreateItem
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateItem)
