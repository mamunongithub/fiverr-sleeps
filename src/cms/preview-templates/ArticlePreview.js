import React from 'react'
import { ArticleTemplate } from '../../templates/article-page'

export default function ArticlePreview({ entry, widgetFor }) {
  return (
    <ArticleTemplate
      data={entry.getIn(['data']).toJS()}
      // content={widgetFor('body')}
    />
  )
}
