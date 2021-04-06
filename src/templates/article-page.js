import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import CircleChart from '../components/CircleChart'
import ArticleItems from '../components/ArticleItems'

export function ArticleTemplate({ data, fields, relatedArticles }) {
  return (
    <section className="aticle-page container">
      <h1 className="aticle-page__title">{data.title}</h1>
      <PreviewCompatibleImage {...data.featuredImage} />
      <div dangerouslySetInnerHTML={{ __html: fields.description }} />
      <blockquote dangerouslySetInnerHTML={{ __html: fields.quote }} />
      <div className="aticle-page__pros-cons">
        <div className="aticle-page__pros">
          <h3 className="aticle-page__pros-title">Pros</h3>
          {data.pros.map((item, index) => (
            <div key={index} className="aticle-page__pros-item">
              {item}
            </div>
          ))}
        </div>
        <div className="aticle-page__cons">
          <h3 className="aticle-page__cons-title">Cons</h3>
          {data.cons.map((item, index) => (
            <div key={index} className="aticle-page__cons-item">
              {item}
            </div>
          ))}
        </div>
      </div>
      <table border="2">
        <tbody>
          <tr>
            <td colSpan="2">
              <PreviewCompatibleImage
                style={{ width: 320 }}
                {...data.productImage}
              />
            </td>
          </tr>
          {data.table.map(({ name, value }, index) => (
            <tr key={index}>
              <td>{name}</td>
              <td>{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <div>
          <CircleChart percent={data.gauges.mode1.value} />
          <h4>{data.gauges.mode1.title}</h4>
          {data.gauges.mode1.features.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
        </div>
        <div>
          <CircleChart percent={data.gauges.mode2.value} />
          <h4>{data.gauges.mode2.title}</h4>
          {data.gauges.mode2.features.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
        </div>
        <div>
          <CircleChart percent={data.gauges.mode2.value} />
          <h4>{data.gauges.mode2.title}</h4>
          {data.gauges.mode2.features.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
        </div>
      </div>
      <div>
        <div>
          <PreviewCompatibleImage
            style={{ width: 320 }}
            {...data.productImage}
          />
        </div>
        <div dangerouslySetInnerHTML={{ __html: fields.productDetails }} />
      </div>
      {relatedArticles.length > 0 && (
        <>
          <h1>Related articles</h1>
          <ArticleItems items={relatedArticles} />
        </>
      )}
    </section>
  )
}

export default function Article({
  data: {
    markdownRemark: post,
    allMarkdownRemark: { edges },
  },
}) {
  let relatedArticles = []
  if (post.frontmatter.related) {
    relatedArticles = edges.filter((_edges) => {
      return !!post.frontmatter.related.find(
        ({ article }) => _edges.node.frontmatter.slug === article
      )
    })
  }
  return (
    <Layout title={post.frontmatter.title}>
      <ArticleTemplate
        data={post.frontmatter}
        fields={post.fields}
        relatedArticles={relatedArticles}
      />
    </Layout>
  )
}

export const pageQuery = graphql`
  query ArticleByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      fields {
        description
        productDetails
        quote
      }
      frontmatter {
        title
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        description
        quote
        pros
        cons
        productImage {
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        table {
          name
          value
        }
        gauges {
          mode1 {
            value
            title
            features
          }
          mode2 {
            value
            title
            features
          }
          mode3 {
            value
            title
            features
          }
        }
        related {
          article
        }
      }
    }
    allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "article-page" } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            slug
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 500) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
