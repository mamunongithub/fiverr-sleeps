import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import SleepsPageTemplate from './sleeps-template-page'

export default function SleepsPage({ data }) {
  return (
    <Layout>
      <SleepsPageTemplate data={data.markdownRemark.frontmatter} />
    </Layout>
  )
}

export const sleepsPageQuery = graphql`
  query SleepPageQuery {
    markdownRemark(frontmatter: { templateKey: { eq: "sleeps-page" } }) {
      frontmatter {
        title
        subtitle
        tagline
        featureTags {
          item1 {
            image {
              childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
              }
            }
            link
          }
          item2 {
            image {
              childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
              }
            }
            link
          }
          item3 {
            image {
              childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
              }
            }
            link
          }
          item4 {
            image {
              childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
              }
            }
            link
          }
        }
        section2 {
          image {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
            }
          }
          tagline
          title
          description
          buttonText
          buttonLink
        }
        section3 {
          tagline
          title
          contentList {
            title
            description
          }
          image {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
            }
          }
        }
        section4 {
          tagline
          title
          categoryList {
            title
            link
          }
        }
      }
    }
  }
`
