import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { fetchItemsPending, fetchItemsComplete, fetchItemsError } from '../store/actions/actions'
import Home from '../components/Home'
import NoMatch from '../components/NoMatch'
import FlashMessage from '../components/FlashMessage'

const delay = 2000

class App extends Component {

    componentWillMount () {
        // this is faking an ajax request by calling the action to
        // first start the API request
        this.props.fetchItemsPending()
        // and then delaying the action to fake completion of the request
        setTimeout(() => this.props.fetchItemsComplete(), delay)
        // or we can fake an error like so
        // setTimeout(() => this.props.fetchItemsError(), delay)
    }

    render () {
        const items = this.props.items.items

        return (
            <Router>
                <div>
                    {/* Header Component */}

                    <Switch>
                        <Route path="/" exact component={Home} />
                        {/* <Route path="/items" component={Items} /> */}
                        <Route component={NoMatch} />
                    </Switch>

                    {/* this will be removed once we build the /items components */}
                    <h2>
                        Items
                        <small>(just to make sure Redux is still working)</small>
                    </h2>

                    <ul>
                        {items.map(item => (
                            <li key={item._id}>
                                {item.name}
                            </li>
                        ))}
                    </ul>

                    {/* Footer Component */}

                    {this.props.items.itemsLoading &&
                        <FlashMessage msg={`loading items with ${delay}ms delay`} />}
                    {this.props.items.itemsError &&
                        <FlashMessage msg={this.props.items.itemsError} error={true} />}
                </div>
            </Router>
        )
    }
}

const mapStateToProps = (state) => ({
    items: state.items
})

const mapDispatchToProps = { fetchItemsPending, fetchItemsComplete, fetchItemsError }

export default connect(mapStateToProps, mapDispatchToProps)(App)
