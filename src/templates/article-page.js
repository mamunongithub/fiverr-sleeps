import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/Layout'
import ArticleItems from '../components/ArticleItems'
import useArticlePageData from '../staticQuerys/useArticlePageData'
import useTags from '../staticQuerys/useTags'
import useArticles from '../staticQuerys/useArticles'
import useAffiliateLinks from '../staticQuerys/useAffiliateLinks'
import { findByArray, joinTagArticle } from '../helper/helper'

export default function ArticlePage({ data }) {
  const pageData = useArticlePageData()
  const tags = useTags()
  const articles = useArticles()
  const affiliateLinks = useAffiliateLinks()

  const { html, frontmatter } = data.markdownRemark

  let relatedArticles = []

  if (frontmatter.relatedArticles) {
    relatedArticles = findByArray({
      arr1: articles,
      arr2: frontmatter.relatedArticles,
      cb1: (item) => item.node.frontmatter.slug,
      cb2: (item) => item.article,
    })
  }

  const joinedRelatedArticles = joinTagArticle(tags, relatedArticles)

  const replacedHtml = html
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
    <Layout title={frontmatter.title} description={pageData.description}>
      <section className="container article-page">
        <h1 className="article-page__title">{frontmatter.title}</h1>
        {frontmatter.articleImage && (
          <Img
            className="article-page__image"
            fluid={frontmatter.articleImage.childImageSharp.fluid}
          />
        )}
        <div
          className="markdown-content"
          dangerouslySetInnerHTML={{
            __html: replacedHtml,
          }}
        />
        {joinedRelatedArticles.length > 0 && (
          <>
            <h1 className="cool-title__wrapper">
              <span className="cool-title">{pageData.relatedArticleTitle}</span>
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
    markdownRemark(id: { eq: $id }) {
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
  }
`
