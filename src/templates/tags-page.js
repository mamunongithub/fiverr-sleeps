import React from 'react'
import { graphql } from 'gatsby'
import { capitalize } from 'lodash'

import Layout from '../components/Layout'
import Cover from '../components/Cover'
import ArticleItems from '../components/ArticleItems'
import useTags from '../staticQuerys/useTags'
import useArticles from '../staticQuerys/useArticles'
import { joinTagArticle } from '../helper/helper'

export default function TagPage({ data: { pageData }, pageContext }) {
  const tags = useTags()
  const articles = useArticles()

  const tagTitle = pageData.frontmatter.mainTitle.replace(
    /\{\{tag\}\}/g,
    capitalize(pageContext.tag)
  )

  const joinedArticles = joinTagArticle(tags, articles)

  const tagArticles = joinedArticles
    .filter((article) =>
      Boolean(article.tags.find((tag) => tag.name === pageContext.tag))
    )
    .filter((item) => Boolean(item))

  return (
    <Layout title={tagTitle} description={pageData.frontmatter.description}>
      <section className="container tags">
        <Cover title={tagTitle} image={pageData.frontmatter.coverImage} />
        <h2 className="cover__subtitle">
          {pageData.frontmatter.secondaryTitle}
        </h2>
        <ArticleItems items={tagArticles} />
      </section>
    </Layout>
  )
}

export const tagPageQuery = graphql`
  query TagPage {
    pageData: markdownRemark(frontmatter: { dataKey: { eq: "tagPage" } }) {
      frontmatter {
        coverImage {
          childImageSharp {
            fluid(maxWidth: 1000, maxHeight: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        description
        mainTitle
        secondaryTitle
      }
    }
  }
`
