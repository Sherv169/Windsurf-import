import React from "react"
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => {
  return (
    <Layout>
      <h1>Home page.</h1>
      <h2>featured product categories photos.</h2>
      <p>More information? <Link to='/contact'>Contact me.</Link> </p>
    </Layout>
  )
}

export default IndexPage