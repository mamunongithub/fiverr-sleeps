import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../../components/Layout'
import Cover from '../../components/Cover'
import ArticleItems from '../../components/ArticleItems'
import useTags from '../../staticQuerys/useTags'
import useArticles from '../../staticQuerys/useArticles'
import { joinTagArticle } from '../../helper/helper'

export default function ArticlePage({ data: { pageData } }) {
  const tags = useTags()
  const articles = useArticles()
  const joinedArticles = joinTagArticle(tags, articles)

  return (
    <Layout
      title={pageData.frontmatter.mainTitle}
      description={pageData.frontmatter.description}
    >
      <section className="container article">
        <Cover
          title={pageData.frontmatter.mainTitle}
          image={pageData.frontmatter.coverImage}
        />
        <h2 className="cover__subtitle">
          {pageData.frontmatter.secondaryTitle}
        </h2>
        <ArticleItems items={joinedArticles} />
      </section>
    </Layout>
  )
}

export const articlePageQuery = graphql`
  query ArticlePageQuery {
    pageData: markdownRemark(frontmatter: { dataKey: { eq: "articlesPage" } }) {
      frontmatter {
        description
        coverImage {
          childImageSharp {
            fluid(maxWidth: 1000, maxHeight: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        mainTitle
        secondaryTitle
      }
    }
  }
`
