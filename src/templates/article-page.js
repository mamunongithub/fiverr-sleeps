import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/Layout'
import CircleChart from '../components/CircleChart'
import ArticleItems from '../components/ArticleItems'

export default function Article({
  data: {
    markdownRemark: { frontmatter: postData, fields: postFields },
    allMarkdownRemark: { edges: posts },
  },
}) {
  let relatedArticles = []
  if (postData.related) {
    relatedArticles = posts.filter((post) => {
      return !!postData.related.find(
        ({ article }) => post.node.frontmatter.slug === article
      )
    })
  }
  const affiliateButton = (
    <a
      className="affiliate-links"
      href={postData.affiliateLink}
      rel="nofollow noreferrer noopener"
      target="_blank"
    >
      Ver en Amazon!
    </a>
  )
  return (
    <Layout title={postData.title}>
      <section className="container article-page">
        <h1 className="article-page__title">{postData.title}</h1>
        <Img
          className="article-page__image"
          fluid={postData.featuredImage.childImageSharp.fluid}
        />
        <div
          className="article-page__description markdown-content"
          dangerouslySetInnerHTML={{ __html: postFields.description }}
        />
        <h2 className="article-page__subtitle">Pros y contras</h2>
        <div className="article-page__pros-cons">
          <div className="article-page__pros">
            <h3 className="article-page__pros-title">Pros</h3>
            {postData.pros.map((item, index) => (
              <div key={index} className="article-page__pros-item">
                <span role="img" aria-label="Pros">
                  ✅
                </span>{' '}
                {item}
              </div>
            ))}
          </div>
          <div className="article-page__cons">
            <h3 className="article-page__cons-title">Cons</h3>
            {postData.cons.map((item, index) => (
              <div key={index} className="article-page__cons-item">
                <span role="img" aria-label="Cons">
                  ❌
                </span>{' '}
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="article-page__product-link">{affiliateButton}</div>
        <table className="article-page__product-table">
          <tbody>
            <tr>
              <td colSpan="2">
                <Img
                  className="article-page__product-image"
                  fluid={postData.productImage.childImageSharp.fluid}
                />
              </td>
            </tr>
            {postData.table.map(({ name, value }, index) => (
              <tr key={index}>
                <td>{name}</td>
                <td>{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="article-page__chart">
          <div className="article-page__chart-item">
            <CircleChart percent={postData.gauges.mode1.value} />
            <h4 className="article-page__chart-item-header">
              {postData.gauges.mode1.title}
            </h4>
            {postData.gauges.mode1.features.map((item, index) => (
              <div className="article-page__chart-list" key={index}>
                {item}
              </div>
            ))}
          </div>
          <div className="article-page__chart-item">
            <CircleChart percent={postData.gauges.mode2.value} />
            <h4 className="article-page__chart-item-header">
              {postData.gauges.mode2.title}
            </h4>
            {postData.gauges.mode2.features.map((item, index) => (
              <div className="article-page__chart-list" key={index}>
                {item}
              </div>
            ))}
          </div>
          <div className="article-page__chart-item">
            <CircleChart percent={postData.gauges.mode2.value} />
            <h4 className="article-page__chart-item-header">
              {postData.gauges.mode2.title}
            </h4>
            {postData.gauges.mode2.features.map((item, index) => (
              <div className="article-page__chart-list" key={index}>
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="article-page__product">
          <div className="article-page__product-left">
            <Img
              className="article-page__product-image"
              fluid={postData.productImage.childImageSharp.fluid}
            />
            {affiliateButton}
          </div>
          <div
            className="article-page__product-right markdown-content"
            dangerouslySetInnerHTML={{ __html: postFields.productDetails }}
          />
        </div>
        {relatedArticles.length > 0 && (
          <>
            <h1 className="cool-title__wrapper">
              <span className="cool-title">Related articles</span>
            </h1>
            <ArticleItems items={relatedArticles} />
          </>
        )}
      </section>
    </Layout>
  )
}

export const pageQuery = graphql`
  query ArticleByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      fields {
        description
        productDetails
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
        affiliateLink
        description
        pros
        cons
        productImage {
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        table {
          name
          value
        }
        gauges {
          mode1 {
            value
            title
            features
          }
          mode2 {
            value
            title
            features
          }
          mode3 {
            value
            title
            features
          }
        }
        related {
          article
        }
      }
    }
    allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "article-page" } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            slug
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
