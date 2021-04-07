import React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'

import { FacebookIcon, YoutubeIcon, PinterestIcon, LinkedinIcon } from './Icons'

export default function Footer() {
  const data = useStaticQuery(graphql`
    query FooterQuery {
      markdownRemark(frontmatter: { dataKey: { eq: "footer" } }) {
        frontmatter {
          section1 {
            title
            description
            socialLinks {
              facebook
              youtube
              pinterest
              linkedin
            }
          }
          section2 {
            title
            links {
              title
              link
            }
          }
          section3 {
            title
            links {
              title
              link
            }
          }
          section4 {
            title
            description
            buttonText
          }
        }
      }
    }
  `)

  const {
    section1,
    section2,
    section3,
    section4,
  } = data.markdownRemark.frontmatter

  return (
    <footer className="footer">
      <div className="container footer__container">
        <div className="footer__section footer__section--social">
          <h3 className="footer__title">{section1.title}</h3>
          <p>{section1.description}</p>
          <div className="footer__social-icons">
            <a
              href={section1.socialLinks.facebook}
              target="_blank"
              rel="noreferrer"
            >
              <FacebookIcon />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href={section1.socialLinks.youtube}
            >
              <YoutubeIcon />
            </a>
            <a
              href={section1.socialLinks.pinterest}
              target="_blank"
              rel="noreferrer"
            >
              <PinterestIcon />
            </a>
            <a
              href={section1.socialLinks.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <LinkedinIcon />
            </a>
          </div>
        </div>
        <div className="footer__section">
          <h3 className="footer__title">{section2.title}</h3>
          <div className="footer__list">
            {section2.links.map(({ title, link }, index) => (
              <Link key={index} to={link}>
                {title}
              </Link>
            ))}
          </div>
        </div>
        <div className="footer__section">
          <h3 className="footer__title">{section3.title}</h3>
          <div className="footer__list">
            {section3.links.map(({ title, link }, index) => (
              <Link key={index} to={link}>
                {title}
              </Link>
            ))}
          </div>
        </div>
        <div className="footer__section footer__section--newsletter">
          <h3 className="footer__title">{section4.title}</h3>
          <p>{section4.description}</p>
          <form className="footer__newsletter">
            <input type="text" placeholder="Votre email" />
            <button>{section4.buttonText}</button>
          </form>
        </div>
      </div>
    </footer>
  )
}
