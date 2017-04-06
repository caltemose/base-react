import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => (
    <main>
        <article>
            <h1>Home</h1>
            <Link to="/items">View all Items in Mongo</Link>

            <h2>About this Project</h2>

            <p>
                <a href="https://caltemose.github.io/base-react/">Read documentation about this project on Github.</a>
            </p>

            <p>This walkthrough covers building a basic Node/Express/MongoDB backend (API only) and a React-based front-end. The primary goal is to help developers get a better understanding of working with asynchronous data in React and connecting React data to an API using Redux to manage the front-end data store.</p>

            <p>This project is not the be-all/end-all of how to handle React/Redux applications. It is merely a starting off point to get developers capable of exploring this kind of work in more detail on their own.</p>

            <p>The documentation linked above lists the various branches for both the API and the front-end repos and summarizes the code updates and branch purposes so developers can clone the repo and see how the code evolves from the initial stages to the current version.</p>

            <p>The code continues to change as I add new features and rework existing code in order to get to what I believe is a reasonable way to write and organize this code. Always a work in progress...</p>

            <p>If you have feedback/questions, hit me up on Twitter at <a href="https://twitter.com/caltemose">@caltemose</a> or feel free to submit issues on the <a href="https://github.com/caltemose/base-react">repo page on Github.</a></p>
        </article>
    </main>
)

export default Home
