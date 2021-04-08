import React from 'react'

import CircleChart from './CircleChart'

export default function ProductMode({ value, title, features }) {
  return (
    <div className="article-page__chart-item">
      <CircleChart percent={value} />
      <h4 className="article-page__chart-item-header">{title}</h4>
      {features.map((item, index) => (
        <div className="article-page__chart-list" key={index}>
          {item}
        </div>
      ))}
    </div>
  )
}
