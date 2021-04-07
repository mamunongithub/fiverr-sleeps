import React from 'react'
import { Link } from 'gatsby'

import { ChevronRightIcon } from './Icons'

export default function FeatureArticleItem({ subtitle, title, to, linkText }) {
  return (
    <div className="feature-article__item-wrapper">
      <div className="feature-article__item">
        <strong className="feature-article__subtitle">{subtitle}</strong>
        <h3 className="feature-article__title">{title}</h3>
        <Link to={to} className="feature-article__link">
          {linkText} <ChevronRightIcon />
        </Link>
      </div>
    </div>
  )
}
