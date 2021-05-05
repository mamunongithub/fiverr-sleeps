import { graphql, useStaticQuery } from 'gatsby'

export default function useTagsPageData() {
  const data = useStaticQuery(
    graphql`
      query TAGS_PAGE_DATA_QUERY {
        markdownRemark(frontmatter: { dataKey: { eq: "tagsPage" } }) {
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
            recentArticleTitle
          }
        }
      }
    `
  )
  return data.markdownRemark.frontmatter
}
