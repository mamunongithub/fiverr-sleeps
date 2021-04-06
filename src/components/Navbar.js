import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { MenuIcon } from './Icons'
import PreviewCompatibleImage from './PreviewCompatibleImage'

export function NavbarTemplate({ data, logo }) {
  const [open, setOpen] = React.useState(false)

  return (
    <nav className="navbar" role="navigation" aria-label="main-navigation">
      <div className="container navbar__container">
        <div className="navbar__brand">
          <Link to="/" title="Logo">
            <PreviewCompatibleImage {...logo} />
          </Link>
          <button className="navbar__button" onClick={() => setOpen(!open)}>
            <MenuIcon />
          </button>
        </div>
        <div className={`navbar__menu ${open ? 'navbar__menu--open' : ''}`}>
          {data.menuitems.map(({ title, link }, index) => (
            <Link key={index} className="navbar__menu-item" to={link}>
              {title}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default function Navbar() {
  const {
    markdownRemark: { frontmatter },
  } = useStaticQuery(graphql`
    query HeaderQuery {
      markdownRemark(frontmatter: { dataKey: { eq: "navbar" } }) {
        frontmatter {
          logo {
            childImageSharp {
              fixed(width: 100) {
                ...GatsbyImageSharpFixed
              }
            }
          }
          menuitems {
            title
            link
          }
        }
      }
    }
  `)
  return <NavbarTemplate data={frontmatter} logo={frontmatter.logo} />
}
