import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../../components/Layout'
import Cover from '../../components/Cover'
import ArticleItems from '../../components/ArticleItems'

export default function ArticlePage({ data: { articles } }) {
  return (
    <Layout title="Articles">
      <section className="container atricle">
        <Cover title="Articles" image="/simple-image.jpg" />
        <h2 className="cover__subtitle">
          Do you want to know the pros and cons before buying?
        </h2>
        <ArticleItems items={articles.edges} />
      </section>
    </Layout>
  )
}

export const atriclePageQuery = graphql`
  query AtriclePageQuery {
    articles: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { templateKey: { eq: "article-page" } } }
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
