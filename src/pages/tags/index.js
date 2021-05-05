import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../../components/Layout'
import Cover from '../../components/Cover'
import CategoryItems from '../../components/CategoryItems'
import ArticleItems from '../../components/ArticleItems'
import useTags from '../../staticQuerys/useTags'
import useArticles from '../../staticQuerys/useArticles'
import { joinTagArticle } from '../../helper/helper'

export default function TagsPage({ data: { pageData } }) {
  const tags = useTags()
  const articles = useArticles()
  const joinedArticles = joinTagArticle(tags, articles)

  return (
    <Layout title="Category" description={pageData.frontmatter.description}>
      <section className="container category">
        <Cover
          title={pageData.frontmatter.mainTitle}
          image={pageData.frontmatter.coverImage}
        />
        <h2 className="cover__subtitle">
          {pageData.frontmatter.secondaryTitle}
        </h2>
        <CategoryItems items={tags} />
        <h1 className="cool-title__wrapper">
          <span className="cool-title">
            {pageData.frontmatter.recentArticleTitle}
          </span>
        </h1>
        <ArticleItems items={joinedArticles} />
      </section>
    </Layout>
  )
}

export const tagPageQuery = graphql`
  query TagsQuery {
    pageData: markdownRemark(frontmatter: { dataKey: { eq: "tagsPage" } }) {
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
        recentArticleTitle
      }
    }
  }
`
