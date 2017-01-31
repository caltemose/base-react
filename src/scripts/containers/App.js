import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from '../components/Home'
import NoMatch from '../components/NoMatch'

class App extends Component {
    render() {
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
                </div>
            </Router>
        )
    }
}

const mapStateToProps = (state) => ({
    items: state.items
})

export default connect(mapStateToProps)(App)
