import React from 'react'
import { Link } from 'gatsby'

import useFooterQuery from '../staticQuerys/useFooterQuery'
import { FacebookIcon, YoutubeIcon, PinterestIcon, LinkedinIcon } from './Icons'
import { resolveLink } from '../helper/helper'

export default function Footer() {
  const { column1, column2, column3, column4 } = useFooterQuery()

  return (
    <footer className="footer">
      <div className="container footer__container">
        <div className="footer__section footer__section--social">
          <h3 className="footer__title">{column1.title}</h3>
          <p>{column1.description}</p>
          <div className="footer__social-icons">
            {column1.socialLinks.facebook && (
              <a
                href={column1.socialLinks.facebook}
                target="_blank"
                rel="noreferrer"
              >
                <FacebookIcon />
              </a>
            )}
            {column1.socialLinks.youtube && (
              <a
                target="_blank"
                rel="noreferrer"
                href={column1.socialLinks.youtube}
              >
                <YoutubeIcon />
              </a>
            )}
            {column1.socialLinks.pinterest && (
              <a
                href={column1.socialLinks.pinterest}
                target="_blank"
                rel="noreferrer"
              >
                <PinterestIcon />
              </a>
            )}
            {column1.socialLinks.linkedin && (
              <a
                href={column1.socialLinks.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                <LinkedinIcon />
              </a>
            )}
          </div>
        </div>
        <div className="footer__section">
          <h3 className="footer__title">{column2.title}</h3>
          <div className="footer__list">
            {column2.links.map(({ title, link }, index) => (
              <Link key={index} to={resolveLink(link)}>
                {title}
              </Link>
            ))}
          </div>
        </div>
        <div className="footer__section">
          <h3 className="footer__title">{column3.title}</h3>
          <div className="footer__list">
            {column3.links.map(({ title, link }, index) => (
              <Link key={index} to={resolveLink(link)}>
                {title}
              </Link>
            ))}
          </div>
        </div>
        <div className="footer__section footer__section--newsletter">
          <h3 className="footer__title">{column4.title}</h3>
          <p>{column4.description}</p>
          <form
            className="footer__newsletter"
            name="subscription"
            method="POST"
            data-netlify="true"
          >
            <input type="email" placeholder={column4.placeholderText} />
            <button>{column4.buttonText}</button>
          </form>
        </div>
      </div>
    </footer>
  )
}
