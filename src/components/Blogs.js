import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

export default function Blogs() {
  const data = useStaticQuery(graphql`
    query BlogRollQuery {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
      ) {
        edges {
          node {
            excerpt(pruneLength: 400)
            id
            fields {
              slug
            }
            frontmatter {
              title
              date(formatString: "MMMM DD, YYYY")
            }
          }
        }
      }
    }
  `)

  const { edges: posts } = data.allMarkdownRemark

  return (
    posts &&
    posts.map(({ node: post }) => (
      <article key={post.id}>
        <header>
          <p>
            <Link to={post.fields.slug}>{post.frontmatter.title}</Link> -
            <span>{post.frontmatter.date}</span>
          </p>
        </header>
        <p>{post.excerpt}</p>
      </article>
    ))
  )
}
