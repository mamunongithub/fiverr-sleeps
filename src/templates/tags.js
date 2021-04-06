import React from 'react'
import { graphql } from 'gatsby'
import { capitalize } from 'lodash'

import Layout from '../components/Layout'
import Cover from '../components/Cover'
import ArticleItems from '../components/ArticleItems'

export default function TagRoute({ data: { tags }, pageContext: { tag } }) {
  const tagTitle = `${capitalize(tag)} Articles`
  return (
    <Layout title={tagTitle}>
      <section className="container tags">
        <Cover title={tagTitle} image="/simple-image.jpg" />
        <h2 className="cover__subtitle">
          Do you want to know the pros and cons before buying?
        </h2>
        <ArticleItems items={tags.edges} />
      </section>
    </Layout>
  )
}

export const tagPageQuery = graphql`
  query TagPage($tag: String) {
    tags: allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { elemMatch: { name: { eq: $tag } } } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 500) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
