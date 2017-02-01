import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { fetchItems } from '../store/actions/actions'
import Home from '../components/Home'
import NoMatch from '../components/NoMatch'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Items from '../components/Items'
import FlashMessage from '../components/FlashMessage'

const delay = 1000

class App extends Component {

    componentWillMount () {
        // trigger the API request to fetch the items from the API/database
        this.props.fetchItems()
    }

    render () {
        const items = this.props.items.items

        return (
            <Router>
                <div>
                    <Header />

                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/items" component={Items} items={items} />
                        <Route component={NoMatch} />
                    </Switch>

                    <Footer />

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

const mapDispatchToProps = { fetchItems }

export default connect(mapStateToProps, mapDispatchToProps)(App)
