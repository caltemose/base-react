import React from 'react'
import { connect } from 'react-redux'
import { requestCreateItem } from '../store/actions/actions'
import ItemForm from '../components/ItemForm'

const CreateItem = ({ requestCreateItem, creatingItem, createItemError }) => (
    <div className="create-item">
        <h3>Create Item:</h3>
        <ItemForm
            onSubmit={requestCreateItem}
            buttonText="Create Item"
            error={createItemError}
            disabled={creatingItem}
        />
    </div>
)

const mapStateToProps = (state) => ({
    creatingItem: state.items.creatingItem,
    createItemError: state.items.createItemError
})

const mapDispatchToProps = {
    requestCreateItem
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateItem)
