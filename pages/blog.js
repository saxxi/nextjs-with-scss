import Link from 'next/link'
import React from 'react'

export default class extends React.Component {
  static getInitialProps ({ query: { id } }) {
    return { id }
  }

  render () {
    return <div>
      <h1>My {this.props.id} blog post</h1>
      <p>
        this is a test.
      </p>
      <p>
        <Link href="/">
          <a>Home</a>
        </Link>
      </p>
    </div>
  }
}
