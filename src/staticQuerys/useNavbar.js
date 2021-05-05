import { graphql, useStaticQuery } from 'gatsby'

export default function useNavbar() {
  const data = useStaticQuery(
    graphql`
      query NAVBAR_QUERY {
        markdownRemark(frontmatter: { dataKey: { eq: "navbar" } }) {
          frontmatter {
            lang
            logo {
              childImageSharp {
                fixed(width: 100) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
            menuitems {
              item
            }
          }
        }
      }
    `
  )
  return data.markdownRemark.frontmatter
}
