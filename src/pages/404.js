import React from 'react'
import Link from 'gatsby-link'

const NotFoundPage = () => (
  <div style={{ width: '100%' }}>
    <h1>Oh no! 🧐</h1>
    <p>We can't find the page you're looking for.</p>
    <Link to='/'>Back to homepage</Link>.
  </div>
)

export default NotFoundPage
