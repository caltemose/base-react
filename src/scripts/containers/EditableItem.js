import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { requestEditItem } from '../store/actions/actions'
import ItemForm from '../components/ItemForm'

const EditableItem = ({ item, requestEditItem }) => (
    <ItemForm item={item} onEditItem={requestEditItem} />
)

EditableItem.propTypes = {
    item: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = { requestEditItem }

export default connect(mapStateToProps, mapDispatchToProps)(EditableItem)
