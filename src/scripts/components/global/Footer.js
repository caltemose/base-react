import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => (
    <footer>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/items">Items</Link>
            <a href="https://github.com/caltemose/base-react">Github repo for React App</a>
            <a href="https://github.com/caltemose/base-mongo-express">Github repo for API</a>
            <a href="https://caltemose.github.io/base-react">Documentation for this tutorial</a>
            <a href="https://twitter.com/caltemose">Twitter Me</a>
        </nav>
    </footer>
)

export default Footer
