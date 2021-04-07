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
  if (postData.relatedArticles) {
    relatedArticles = posts.filter((post) => {
      return !!postData.relatedArticles.find(
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
          fluid={postData.articleImage.childImageSharp.fluid}
        />
        <div
          className="article-page__description markdown-content"
          dangerouslySetInnerHTML={{
            __html: postFields.articleDescriptionHTML,
          }}
        />
        <h2 className="article-page__subtitle">Pros y contras</h2>
        <div className="article-page__pros-cons">
          <div className="article-page__pros">
            <h3 className="article-page__pros-title">Pros</h3>
            {postData.productPros.map((item, index) => (
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
            {postData.productCons.map((item, index) => (
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
            {postData.productDetails.map(({ name, value }, index) => (
              <tr key={index}>
                <td>{name}</td>
                <td>{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="article-page__chart">
          <div className="article-page__chart-item">
            <CircleChart percent={postData.productGauges.mode1.value} />
            <h4 className="article-page__chart-item-header">
              {postData.productGauges.mode1.title}
            </h4>
            {postData.productGauges.mode1.features.map((item, index) => (
              <div className="article-page__chart-list" key={index}>
                {item}
              </div>
            ))}
          </div>
          <div className="article-page__chart-item">
            <CircleChart percent={postData.productGauges.mode2.value} />
            <h4 className="article-page__chart-item-header">
              {postData.productGauges.mode2.title}
            </h4>
            {postData.productGauges.mode2.features.map((item, index) => (
              <div className="article-page__chart-list" key={index}>
                {item}
              </div>
            ))}
          </div>
          <div className="article-page__chart-item">
            <CircleChart percent={postData.productGauges.mode2.value} />
            <h4 className="article-page__chart-item-header">
              {postData.productGauges.mode2.title}
            </h4>
            {postData.productGauges.mode2.features.map((item, index) => (
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
            dangerouslySetInnerHTML={{
              __html: postFields.productDescriptionHTML,
            }}
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
        articleDescriptionHTML
        productDescriptionHTML
      }
      frontmatter {
        title
        affiliateLink
        articleImage {
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        productPros
        productCons
        productImage {
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        productDetails {
          name
          value
        }
        productGauges {
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
        relatedArticles {
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
            articleImage {
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
