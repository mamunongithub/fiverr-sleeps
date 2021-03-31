import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import SleepsPageTemplate from './sleeps-template-page'

export default function SleepsPage({ data }) {
  return (
    <Layout>
      <SleepsPageTemplate title={data.markdownRemark.frontmatter.title} />
    </Layout>
  )
}

export const sleepsPageQuery = graphql`
  query SleepPageQuery {
    markdownRemark(frontmatter: { templateKey: { eq: "sleeps-page" } }) {
      frontmatter {
        title
      }
    }
  }
`
