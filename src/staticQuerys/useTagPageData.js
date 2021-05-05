import { graphql, useStaticQuery } from 'gatsby'

export default function useTagPageData() {
  const data = useStaticQuery(
    graphql`
      query TAG_PAGE_DATA_QUERY {
        markdownRemark(frontmatter: { dataKey: { eq: "tagPage" } }) {
          frontmatter {
            coverImage {
              childImageSharp {
                fluid(maxWidth: 1000, maxHeight: 400) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            description
            mainTitle
            secondaryTitle
          }
        }
      }
    `
  )
  return data.markdownRemark.frontmatter
}
