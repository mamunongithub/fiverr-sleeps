import React from 'react'
import { kebabCase } from 'lodash'
import { Helmet } from 'react-helmet'
import { graphql, Link } from 'gatsby'

import Layout from '../components/Layout'

export function BlogPostTemplate({ data, content, html }) {
  return (
    <section>
      <Helmet titleTemplate="%s | Blog">
        <title>{`${data.title}`}</title>
        {/* <meta name="description" content={`${data.description}`} /> */}
      </Helmet>
      <h1>Blogs</h1>
      <h2>{data.title}</h2>
      <p>{data.description}</p>
      {/* {html ? (
        <div dangerouslySetInnerHTML={{ __html: content }} />
      ) : (
        <div>{content}</div>
      )} */}
      {data.tags && data.tags.length ? (
        <div>
          <h4>Tags</h4>
          <ul>
            {data.tags.map((tag) => (
              <li key={tag + `tag`}>
                <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </section>
  )
}

export default function BlogPost({ data }) {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <BlogPostTemplate
        data={post.frontmatter}
        content={post.html}
        html={true}
      />
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
      }
    }
  }
`
