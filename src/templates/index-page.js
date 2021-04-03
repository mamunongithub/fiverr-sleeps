import React from 'react'
import { Link, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import Layout from '../components/Layout'
import { ChevronRightIcon } from '../components/Icons'

export function IndexPageTemplate({
  data: { title, subtitle, tagline, featureTags, section2, section3, section4 },
}) {
  return (
    <>
      <section className="hero">
        <div className="container">
          <h1 className="hero__title">{title}</h1>
          <p className="hero__desc">{subtitle}</p>
          <strong className="hero__strong">{tagline}</strong>
        </div>
      </section>
      <section className="feature">
        <div className="feature__wrapper">
          {Object.keys(featureTags).map((key) => (
            <div key={key} className="feature__item">
              <Link to={featureTags[key].link}>
                <GatsbyImage
                  image={getImage(featureTags[key].image)}
                  alt="Feature tag"
                />
              </Link>
            </div>
          ))}
        </div>
      </section>
      <section className="container cta">
        <div className="cta__left">
          <GatsbyImage
            className="cta__image"
            image={getImage(section2.image)}
            alt={section2.title}
          />
        </div>
        <div className="cta__right">
          <strong className="cta__subtitle">{section2.tagline}</strong>
          <h1 className="cta__title">{section2.title}</h1>
          <p className="cta__desc">{section2.description}</p>
          <Link to={section2.buttonLink} className="cta__link">
            {section2.buttonText}
          </Link>
        </div>
      </section>
      <section className="container feature-article">
        <div className="feature-article__wrapper">
          <FeatureArticleItem
            subtitle="MARQUES DE LITERIE"
            title="Nous avons testé les meilleures marques de literie."
            to="/"
            linkText="VOIR LES MARQUES"
          />
          <FeatureArticleItem
            subtitle="MARQUES DE LITERIE"
            title="Nous avons testé les meilleures marques de literie."
            to="/"
            linkText="VOIR LES MARQUES"
          />
          <FeatureArticleItem
            subtitle="MARQUES DE LITERIE"
            title="Nous avons testé les meilleures marques de literie."
            to="/"
            linkText="VOIR LES MARQUES"
          />
          <FeatureArticleItem
            subtitle="MARQUES DE LITERIE"
            title="Nous avons testé les meilleures marques de literie."
            to="/"
            linkText="VOIR LES MARQUES"
          />
          <FeatureArticleItem
            subtitle="MARQUES DE LITERIE"
            title="Nous avons testé les meilleures marques de literie."
            to="/"
            linkText="VOIR LES MARQUES"
          />
          <FeatureArticleItem
            subtitle="MARQUES DE LITERIE"
            title="Nous avons testé les meilleures marques de literie."
            to="/"
            linkText="VOIR LES MARQUES"
          />
        </div>
      </section>
      <section className="container advantage">
        <div className="advantage__left">
          <strong className="advantage__subtitle">{section3.tagline}</strong>
          <h3 className="advantage__title">{section3.title}</h3>
          {section3.contentList.map(({ title, description }, index) => (
            <React.Fragment key={index}>
              <h4 className="advantage__title2">{title}</h4>
              <p className="advantage__desc">{description}</p>
            </React.Fragment>
          ))}
        </div>
        <div className="advantage__right">
          <GatsbyImage
            style={{ position: 'static' }}
            image={getImage(section3.image)}
            alt={section3.title}
          />
        </div>
      </section>
      <section className="container test">
        <div className="test__wrapper">
          <strong className="test__subtitle">{section4.tagline}</strong>
          <h3 className="test__title">{section4.title}</h3>
          <div className="test__content">
            {section4.categoryList.map(({ title, link }, index) => (
              <React.Fragment key={index}>
                {index ? <span> | </span> : ''}
                <Link to={link}>{title}</Link>
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

const FeatureArticleItem = ({ subtitle, title, to, linkText }) => (
  <div className="feature-article__item-wrapper">
    <div className="feature-article__item">
      <strong className="feature-article__subtitle">{subtitle}</strong>
      <h3 className="feature-article__title">{title}</h3>
      <Link to={to} className="feature-article__link">
        {linkText} <ChevronRightIcon />
      </Link>
    </div>
  </div>
)

export default function IndexPage({ data }) {
  return (
    <Layout>
      <IndexPageTemplate data={data.markdownRemark.frontmatter} />
    </Layout>
  )
}

export const indexPageQuery = graphql`
  query SleepPageQuery {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        subtitle
        tagline
        featureTags {
          item1 {
            image {
              childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
              }
            }
            link
          }
          item2 {
            image {
              childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
              }
            }
            link
          }
          item3 {
            image {
              childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
              }
            }
            link
          }
          item4 {
            image {
              childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
              }
            }
            link
          }
        }
        section2 {
          image {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
            }
          }
          tagline
          title
          description
          buttonText
          buttonLink
        }
        section3 {
          tagline
          title
          contentList {
            title
            description
          }
          image {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
            }
          }
        }
        section4 {
          tagline
          title
          categoryList {
            title
            link
          }
        }
      }
    }
  }
`
