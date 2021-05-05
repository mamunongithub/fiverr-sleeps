import { graphql, useStaticQuery } from 'gatsby'

export default function useArticles() {
  const data = useStaticQuery(
    graphql`
      query ARTICLES_QUERY {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          filter: { frontmatter: { dataKey: { eq: "articles" } } }
        ) {
          edges {
            node {
              frontmatter {
                title
                slug
                tags {
                  tag
                }
                articleImage {
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
  )
  return data.allMarkdownRemark.edges
}
