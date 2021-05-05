import React from 'react'

import Layout from '../../components/Layout'
import Cover from '../../components/Cover'
import CategoryItems from '../../components/CategoryItems'
import ArticleItems from '../../components/ArticleItems'
import useTagsPageData from '../../staticQuerys/useTagsPageData'
import useTags from '../../staticQuerys/useTags'
import useArticles from '../../staticQuerys/useArticles'
import { joinTagArticle } from '../../helper/helper'

export default function TagsPage() {
  const {
    mainTitle,
    secondaryTitle,
    description,
    coverImage,
    recentArticleTitle,
  } = useTagsPageData()
  const tags = useTags()
  const articles = useArticles()
  const joinedArticles = joinTagArticle(tags, articles)

  return (
    <Layout title="Category" description={description}>
      <section className="container category">
        <Cover title={mainTitle} image={coverImage} />
        <h2 className="cover__subtitle">{secondaryTitle}</h2>
        <CategoryItems items={tags} />
        <h1 className="cool-title__wrapper">
          <span className="cool-title">{recentArticleTitle}</span>
        </h1>
        <ArticleItems items={joinedArticles} />
      </section>
    </Layout>
  )
}
