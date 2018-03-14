import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div style={{ width: '100%' }}>
    <h1>Hello <div className='wave'>👋</div></h1>
    <p>
      We're Patch, a software development company in Kent, England.
      Our site is currently in development, so check back soon!
    </p>
    <p>In the meantime, you can <Link to='/contact'>get in touch</Link>.</p>
  </div>
)

export default IndexPage
