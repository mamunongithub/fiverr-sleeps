import { graphql, useStaticQuery } from 'gatsby'

export default function useTagsPageData() {
  const data = useStaticQuery(
    graphql`
      query TAGS_PAGE_DATA_QUERY {
        markdownRemark(frontmatter: { dataKey: { eq: "tagsPage" } }) {
          frontmatter {
            mainTitle
            secondaryTitle
            description
            coverImage {
              childImageSharp {
                fluid(maxWidth: 1000, maxHeight: 400) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            recentArticleTitle
          }
        }
      }
    `
  )
  return data.markdownRemark.frontmatter
}
