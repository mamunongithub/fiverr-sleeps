import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import { resolveLink } from '../helper/helper'

export default function ArticleItems({ items }) {
  return (
    <div className="article__items">
      {items.map(({ title, articleImage, slug, tags }, index) => (
        <Link
          key={index}
          to={resolveLink(`/${tags[0].name}/${slug}`)}
          className="article__item"
        >
          <div className="article__item-wrapper" />
          {articleImage && (
            <Img
              className="article__item-image"
              alt={title}
              fluid={articleImage.childImageSharp.fluid}
            />
          )}
          <h4 className="article__item-title">{title}</h4>
        </Link>
      ))}
    </div>
  )
}
