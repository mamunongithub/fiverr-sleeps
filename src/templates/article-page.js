import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/Layout'
import ArticleItems from '../components/ArticleItems'
import useTags from '../staticQuerys/useTags'
import useArticles from '../staticQuerys/useArticles'
import useAffiliateLinks from '../staticQuerys/useAffiliateLinks'
import { findByArray, joinTagArticle } from '../helper/helper'

export default function ArticlePage({ data: { article, pageData } }) {
  const tags = useTags()
  const articles = useArticles()
  const affiliateLinks = useAffiliateLinks()
  const { frontmatter: articleData } = article

  let relatedArticles = []

  if (articleData.relatedArticles) {
    relatedArticles = findByArray({
      arr1: articles,
      arr2: articleData.relatedArticles,
      cb1: (item) => item.node.frontmatter.slug,
      cb2: (item) => item.article,
    })
  }

  const joinedRelatedArticles = joinTagArticle(tags, relatedArticles)

  const html = article.html
    .replace(/<data-chart[\s\n]+value="([^"]+)"[\s\n]*\/>/g, (_, value) => {
      const totalLength = 301.10565185546875
      return `
<div class="chart">
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle
      cx="50"
      cy="50"
      r="48"
      stroke-dasharray="${totalLength}"
      stroke-dashoffset="${totalLength - (value / 100) * totalLength}"
    />
  </svg>
  <span>
    ${value}%
  </span>
</div>
    `
    })
    .replace(/data-href="([^"]+)"/g, (match, id) => {
      const affiliate = affiliateLinks.find(
        (edge) => edge.node.frontmatter.id === id
      )
      if (affiliate) {
        return `href="${affiliate.node.frontmatter.link}"`
      } else {
        return match
      }
    })

  return (
    <Layout
      title={articleData.title}
      description={pageData.frontmatter.description}
    >
      <section className="container article-page">
        <h1 className="article-page__title">{articleData.title}</h1>
        {articleData.articleImage && (
          <Img
            className="article-page__image"
            fluid={articleData.articleImage.childImageSharp.fluid}
          />
        )}
        <div
          className="markdown-content"
          dangerouslySetInnerHTML={{
            __html: html,
          }}
        />
        {joinedRelatedArticles.length > 0 && (
          <>
            <h1 className="cool-title__wrapper">
              <span className="cool-title">
                {pageData.frontmatter.relatedArticleTitle}
              </span>
            </h1>
            <ArticleItems items={joinedRelatedArticles} />
          </>
        )}
      </section>
    </Layout>
  )
}

export const pageQuery = graphql`
  query ArticleByID($id: String!) {
    article: markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        articleImage {
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        relatedArticles {
          article
        }
      }
    }
    pageData: markdownRemark(frontmatter: { dataKey: { eq: "articlePage" } }) {
      frontmatter {
        description
        relatedArticleTitle
      }
    }
  }
`
