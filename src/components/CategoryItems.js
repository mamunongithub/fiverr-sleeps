import React from 'react'
import { Link } from 'gatsby'
import { kebabCase, capitalize } from 'lodash'

import PreviewCompatibleImage from './PreviewCompatibleImage'

export default function CategoryItems({ items }) {
  const tagsMap = {}
  const allTags = []
  items.forEach(
    ({
      node: {
        frontmatter: { tags },
      },
    }) => {
      tags.forEach((tag) => {
        if (!tagsMap[tag.name]) {
          tagsMap[tag.name] = 1
          allTags.push(tag)
        } else {
          tagsMap[tag.name]++
        }
      })
    }
  )
  return (
    <div className="category__items">
      {allTags.map(({ name, image }) => (
        <Link
          key={name}
          to={`/tags/${kebabCase(name)}/`}
          className="category__item"
        >
          {image && (
            <PreviewCompatibleImage
              className="category__item-image"
              alt={name}
              {...image}
            />
          )}
          <h4 className="category__item-title">{capitalize(name)}</h4>
        </Link>
      ))}
    </div>
  )
}
