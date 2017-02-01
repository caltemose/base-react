import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => (
    <main>
        <h1>Home</h1>
        <p>Hi! I'm the Home component.</p>
        <Link to="/items">Items</Link>
    </main>
)

export default Home
