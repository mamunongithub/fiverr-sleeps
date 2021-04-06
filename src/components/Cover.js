import React from 'react'
import PreviewCompatibleImage from './PreviewCompatibleImage'

export default function Cover({ image, title }) {
  return (
    <div className="cover__wrapper">
      <PreviewCompatibleImage
        image={image}
        alt="Cover image"
        className="cover__image"
      />
      <h1 className="cover__title">{title}</h1>
    </div>
  )
}
