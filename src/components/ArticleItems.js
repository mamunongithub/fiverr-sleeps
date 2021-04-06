import React from 'react'
import { Link } from 'gatsby'

import PreviewCompatibleImage from './PreviewCompatibleImage'

export default function ArticleItems({ items }) {
  return (
    <div className="article__items">
      {items.map(
        (
          {
            node: {
              fields: { slug },
              frontmatter: { title, featuredImage },
            },
          },
          index
        ) => (
          <Link key={index} to={slug} className="article__item">
            <div className="article__item-wrapper" />
            {featuredImage && (
              <PreviewCompatibleImage
                className="article__item-image"
                alt={title}
                {...featuredImage}
              />
            )}
            <h4 className="article__item-title">{title}</h4>
          </Link>
        )
      )}
    </div>
  )
}
