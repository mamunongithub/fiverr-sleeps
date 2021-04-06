import React from 'react'
import Img from 'gatsby-image'

export default function PreviewCompatibleImage({
  alt = '',
  childImageSharp,
  image,
  style,
  imgStyle,
  className,
}) {
  if (!!image && !!image.childImageSharp) {
    return image.childImageSharp.fluid ? (
      <Img
        fluid={image.childImageSharp.fluid}
        className={className}
        alt={alt}
        style={style}
        imgStyle={imgStyle}
      />
    ) : (
      <Img
        fixed={image.childImageSharp.fixed}
        className={className}
        alt={alt}
        style={style}
        imgStyle={imgStyle}
      />
    )
  }

  if (!!childImageSharp) {
    return childImageSharp.fluid ? (
      <Img
        fluid={childImageSharp.fluid}
        className={className}
        alt={alt}
        style={style}
        imgStyle={imgStyle}
      />
    ) : (
      <Img
        fixed={childImageSharp.fixed}
        className={className}
        alt={alt}
        style={style}
        imgStyle={imgStyle}
      />
    )
  }

  if (!!image && typeof image === 'string')
    return <img style={style} className={className} src={image} alt={alt} />
  return null
}
