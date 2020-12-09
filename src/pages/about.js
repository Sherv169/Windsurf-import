import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const AboutPage = () => {
    return (
        <Layout>
            <h1>About Page.</h1>
            <h2>About Maui Importers will go here.</h2>
            <h2>About Steve will go here.</h2>
            <p><Link to="/contact"> Want more information? Reach out.</Link></p>
        </Layout>
    )
}

export default AboutPage
