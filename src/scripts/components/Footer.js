import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => (
    <footer>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/items">Items</Link>
            <a href="https://github.com/caltemose/base-react">Github repo for this tutorial</a>
        </nav>
    </footer>
)

export default Footer
