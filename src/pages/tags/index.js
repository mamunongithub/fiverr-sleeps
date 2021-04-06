import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../../components/Layout'
import Cover from '../../components/Cover'
import CategoryItems from '../../components/CategoryItems'
import ArticleItems from '../../components/ArticleItems'

export default function TagsPage({ data: { tags, articles } }) {
  return (
    <Layout title="Category">
      <section className="container category">
        <Cover title="Category" image="/simple-image.jpg" />
        <h2 className="cover__subtitle">
          Do you want to know the pros and cons before buying?
        </h2>
        <CategoryItems items={tags.edges} />
        <h1 className="cool-title__wrapper">
          <span className="cool-title">Recent articles</span>
        </h1>
        <ArticleItems items={articles.edges} />
      </section>
    </Layout>
  )
}

export const tagPageQuery = graphql`
  query TagsQuery {
    tags: allMarkdownRemark(
      filter: { frontmatter: { tags: { elemMatch: { name: { ne: null } } } } }
    ) {
      edges {
        node {
          frontmatter {
            title
            tags {
              name
              image {
                childImageSharp {
                  fixed(width: 150, height: 150) {
                    ...GatsbyImageSharpFixed
                  }
                }
              }
            }
          }
        }
      }
    }
    articles: allMarkdownRemark(
      limit: 6
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
