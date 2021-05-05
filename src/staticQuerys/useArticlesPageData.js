import { graphql, useStaticQuery } from 'gatsby'

export default function useArticlesPageData() {
  const data = useStaticQuery(
    graphql`
      query ARTICLES_PAGE_DATA_QUERY {
        markdownRemark(frontmatter: { dataKey: { eq: "articlesPage" } }) {
          frontmatter {
            description
            coverImage {
              childImageSharp {
                fluid(maxWidth: 1000, maxHeight: 400) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            mainTitle
            secondaryTitle
          }
        }
      }
    `
  )
  return data.markdownRemark.frontmatter
}
