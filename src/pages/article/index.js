import React from 'react'

import Layout from '../../components/Layout'
import Cover from '../../components/Cover'
import ArticleItems from '../../components/ArticleItems'
import useArticlesPageData from '../../staticQuerys/useArticlesPageData'
import useTags from '../../staticQuerys/useTags'
import useArticles from '../../staticQuerys/useArticles'
import { joinTagArticle } from '../../helper/helper'

export default function ArticlePage() {
  const {
    mainTitle,
    secondaryTitle,
    description,
    coverImage,
  } = useArticlesPageData()
  const tags = useTags()
  const articles = useArticles()
  const joinedArticles = joinTagArticle(tags, articles)

  return (
    <Layout title={mainTitle} description={description}>
      <section className="container article">
        <Cover title={mainTitle} image={coverImage} />
        <h2 className="cover__subtitle">{secondaryTitle}</h2>
        <ArticleItems items={joinedArticles} />
      </section>
    </Layout>
  )
}
