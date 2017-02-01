import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => (
    <header>
        <h1>React/Redux/React-Router/AJAX Study</h1>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/items">Items</Link>
        </nav>
    </header>
)

export default Header
