import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { fetchItems } from './store/actions/actions'
import Home from './routes/Home'
import NoMatch from './routes/NoMatch'
import Items from './routes/Items'
import Header from './components/global/Header'
import Footer from './components/global/Footer'
import FlashMessage from './components/global/FlashMessage'

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
                        <FlashMessage msg={"loading items"} />}
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
