import { graphql, useStaticQuery } from 'gatsby'

export default function useTags() {
  const data = useStaticQuery(
    graphql`
      query TAGS_QUERY {
        allMarkdownRemark(
          filter: { frontmatter: { dataKey: { eq: "tags" } } }
        ) {
          edges {
            node {
              frontmatter {
                id
                name
                image {
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
