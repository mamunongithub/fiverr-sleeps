import React from 'react'
import { BlogPostTemplate } from '../../templates/blog-post'

export default function BlogPostPreview({ entry, widgetFor }) {
  return (
    <BlogPostTemplate
      data={entry.getIn(['data']).toJS()}
      // content={widgetFor('body')}
    />
  )
}
