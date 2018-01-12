import Link from 'next/link'

import Layout from '../components/Layout.js'
import indexStyles from './index.scss'

export default () => {
  
  return (
    <Layout>
      <h1>Basic test page</h1>

      <div>
        <Link href="/">
          <a className="button is-primary">Home</a>
        </Link>
      </div>

      <div>
        <img src="/static/space-620x412.jpg" />
      </div>

      <style jsx>{indexStyles}</style>
    </Layout>
  )
}
