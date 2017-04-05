import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { requestCreateItem } from '../../store/actions/actions'
import ItemForm from './ItemForm'


class CreateItemContainer extends Component {
    static propTypes = {
        creatingItem: PropTypes.bool,
        createItemError: PropTypes.string
    }

    static defaultProps = {
        creatingItem: false,
        createItemError: ''
    }

    state = {
        value: ''
    }

    handleChange = (value) => {
        if (value !== this.state.value) {
            this.setState({ value })
        }
    }

    handleSubmit = () => {
        this.props.requestCreateItem(this.state.value)
    }

    componentWillReceiveProps (nextProps) {
        // if the status of a create request changes from in-progress to done
        // and there are no request errors, clear the input value
        if (this.props.creatingItem && !nextProps.creatingItem && !nextProps.createItemError) {
            this.setState({ value: '' })
        }
    }

    render () {
        const {
            creatingItem, 
            createItemError
        } = this.props

        return (
            <div className="create-item">
                <h3>Create Item:</h3>
                <ItemForm
                    value={this.state.value}
                    onChange={this.handleChange}
                    onSubmit={this.handleSubmit}
                    buttonText="Create Item"
                    error={createItemError}
                    disabled={creatingItem}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    creatingItem: state.items.creatingItem,
    createItemError: state.items.createItemError
})

const mapDispatchToProps = {
    requestCreateItem
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateItemContainer)
