import Link from 'next/link'

import Layout from '../components/Layout.js'
import indexStyles from './index.scss'

export default () => {
  const slug = 22
  return (
    <Layout>
      <h1 className="o-h1">Home</h1>

      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/custom-page">
            <a>custom-page</a>
          </Link>
        </li>
        <li>
          <Link href={`/blog?slug=${slug}`} as={`/blog/${slug}`}>
            <a>blog #22</a>
          </Link>
        </li>
        <li>
          <Link href="/test">
            <a>test</a>
          </Link>
        </li>
      </ul>

      <style jsx>{indexStyles}</style>
    </Layout>
  )
}
