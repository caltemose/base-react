import React, { Component } from 'react'
import { connect } from 'react-redux'

class App extends Component {
    render() {
        const items = this.props.items.items
        
        return (
            <div>
                <h1>base-react</h1>
                <ul>
                    {items.map(item => (
                        <li key={item._id}>
                            {item.name}
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    items: state.items
})

export default connect(mapStateToProps)(App)
