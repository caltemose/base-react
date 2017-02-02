import React from 'react'
import { connect } from 'react-redux'
import { requestCreateItem } from '../store/actions/actions'
import ItemForm from '../components/ItemForm'

const CreateItem = ({ requestCreateItem, creatingItem, createItemError }) => (
    <div className="create-item">
        <h3>Create Item:</h3>
        <ItemForm
            onCreateItem={requestCreateItem}
            creatingItem={creatingItem}
            createItemError={createItemError} />
    </div>
)

// Because of the refactoring to use ItemForm, the properties below are unused.
// Next step is to refactor so ItemForm supports disabling during API actions
// and error display (after API actions) for both editing and creating item modes.
const mapStateToProps = (state) => ({
    creatingItem: state.items.creatingItem,
    createItemError: state.items.createItemError
})

const mapDispatchToProps = {
    requestCreateItem
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateItem)
