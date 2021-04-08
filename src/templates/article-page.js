import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/Layout'
import CircleChart from '../components/CircleChart'
import ArticleItems from '../components/ArticleItems'

export default function ArticlePage({ data: { article, articles, pageData } }) {
  const { frontmatter: articleData, fields } = article
  let relatedArticles = []
  if (articleData.relatedArticles) {
    relatedArticles = articles.edges.filter((post) => {
      return !!articleData.relatedArticles.find(
        ({ article }) => post.node.frontmatter.slug === article
      )
    })
  }
  const affiliateButton = (
    <a
      className="affiliate-links"
      href={articleData.affiliate.link}
      rel="nofollow noreferrer noopener"
      target="_blank"
    >
      {articleData.affiliate.buttonText}
    </a>
  )
  return (
    <Layout title={articleData.title}>
      <section className="container article-page">
        <h1 className="article-page__title">{articleData.title}</h1>
        <Img
          className="article-page__image"
          fluid={articleData.articleImage.childImageSharp.fluid}
        />
        <div
          className="article-page__description markdown-content"
          dangerouslySetInnerHTML={{
            __html: fields.articleDescriptionHTML,
          }}
        />
        <h2 className="article-page__subtitle">{pageData.prosConsTitle}</h2>
        <div className="article-page__pros-cons">
          <div className="article-page__pros">
            <h3 className="article-page__pros-title">Pros</h3>
            {articleData.productPros.map((item, index) => (
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
            {articleData.productCons.map((item, index) => (
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
                  fluid={articleData.productImage.childImageSharp.fluid}
                />
              </td>
            </tr>
            {articleData.productDetails.map(({ name, value }, index) => (
              <tr key={index}>
                <td>{name}</td>
                <td>{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="article-page__chart">
          <div className="article-page__chart-item">
            <CircleChart percent={articleData.productGauges.mode1.value} />
            <h4 className="article-page__chart-item-header">
              {articleData.productGauges.mode1.title}
            </h4>
            {articleData.productGauges.mode1.features.map((item, index) => (
              <div className="article-page__chart-list" key={index}>
                {item}
              </div>
            ))}
          </div>
          <div className="article-page__chart-item">
            <CircleChart percent={articleData.productGauges.mode2.value} />
            <h4 className="article-page__chart-item-header">
              {articleData.productGauges.mode2.title}
            </h4>
            {articleData.productGauges.mode2.features.map((item, index) => (
              <div className="article-page__chart-list" key={index}>
                {item}
              </div>
            ))}
          </div>
          <div className="article-page__chart-item">
            <CircleChart percent={articleData.productGauges.mode2.value} />
            <h4 className="article-page__chart-item-header">
              {articleData.productGauges.mode2.title}
            </h4>
            {articleData.productGauges.mode2.features.map((item, index) => (
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
              fluid={articleData.productImage.childImageSharp.fluid}
            />
            {affiliateButton}
          </div>
          <div
            className="article-page__product-right markdown-content"
            dangerouslySetInnerHTML={{
              __html: fields.productDescriptionHTML,
            }}
          />
        </div>
        <div className="general-note">
          <div className="general-note__left">
            {articleData.generalNote.valuation}
          </div>
          <div className="general-note__right">
            <h4>{articleData.generalNote.message}</h4>
            {affiliateButton}
          </div>
        </div>
        {relatedArticles.length > 0 && (
          <>
            <h1 className="cool-title__wrapper">
              <span className="cool-title">{pageData.recentArticleTitle}</span>
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
    article: markdownRemark(id: { eq: $id }) {
      fields {
        articleDescriptionHTML
        productDescriptionHTML
      }
      frontmatter {
        title
        affiliate {
          link
          buttonText
        }
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
        generalNote {
          message
          valuation
        }
        relatedArticles {
          article
        }
      }
    }
    articles: allMarkdownRemark(
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
    pageData: markdownRemark(frontmatter: { dataKey: { eq: "articlePage" } }) {
      frontmatter {
        prosConsTitle
        recentArticleTitle
      }
    }
  }
`
