import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => (
    <main>
        <h1>Home</h1>
        <p>Hi! I'm the Home component.</p>
        <p>
            <a href="https://github.com/caltemose/base-react">Read documentation about this project on Github.</a>
        </p>
        <Link to="/items">View all Items</Link>
    </main>
)

export default Home
