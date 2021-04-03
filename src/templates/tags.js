import React from 'react'
import { Helmet } from 'react-helmet'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'

export default function TagRoute(props) {
  const posts = props.data.allMarkdownRemark.edges
  const tag = props.pageContext.tag
  const title = props.data.site.siteMetadata.title
  const totalCount = props.data.allMarkdownRemark.totalCount
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? '' : 's'
  } tagged with “${tag}”`

  return (
    <Layout>
      <section>
        <Helmet title={`${tag} | ${title}`} />
        <h3>{tagHeader}</h3>
        <ul>
          {posts.map((post) => (
            <li key={post.node.fields.slug}>
              <Link to={post.node.fields.slug}>
                <h2>{post.node.frontmatter.title}</h2>
              </Link>
            </li>
          ))}
        </ul>
        <Link to="/tags/">Browse all tags</Link>
      </section>
    </Layout>
  )
}

export const tagPageQuery = graphql`
  query TagPage($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`
