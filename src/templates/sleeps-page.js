import React from "react";
import { Link } from "gatsby";

import { ChevronRightIcon } from "../components/icons";
import Layout from "../components/Layout";
import Img1 from "../img/sleeps/matelas.png";
import Img2 from "../img/sleeps/oreiller.png";
import Img3 from "../img/sleeps/couette.png";
import Img4 from "../img/sleeps/sommier.png";
import ImgMobile1 from "../img/sleeps/matelas-mobile.png";
import ImgMobile2 from "../img/sleeps/oreiller-mobile.png";
import ImgMobile3 from "../img/sleeps/couette-mobile.png";
import ImgMobile4 from "../img/sleeps/sommier-mobile.png";
import Img5 from "../img/sleeps/matelas2.png";
import Img6 from "../img/sleeps/sommeil-mini.png";

export const SleepsPageTemplate = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <h1 className="hero__title">Dormez mieux, vivez heureux.</h1>
          <p className="hero__desc">
            Vous cherchez des conseils d'experts, fiables et impartiaux pour
            répondre à vos
            <br /> questions sur le sommeil ? Vous êtes au bon endroit.
          </p>
          <strong className="hero__strong">
            Comparez des dizaines de marques pour trouver votre meilleur
          </strong>
        </div>
        <div className="feature">
          <div className="feature__desktop">
            <Link to="/">
              <img src={Img1} alt="Stuff" />
            </Link>
            <Link to="/">
              <img src={Img2} alt="Stuff" />
            </Link>
            <Link to="/">
              <img src={Img3} alt="Stuff" />
            </Link>
            <Link to="/">
              <img src={Img4} alt="Stuff" />
            </Link>
          </div>
          <div className="feature__mobile">
            <Link to="/">
              <img src={ImgMobile1} alt="Stuff" />
            </Link>
            <Link to="/">
              <img src={ImgMobile2} alt="Stuff" />
            </Link>
            <Link to="/">
              <img src={ImgMobile3} alt="Stuff" />
            </Link>
            <Link to="/">
              <img src={ImgMobile4} alt="Stuff" />
            </Link>
          </div>
        </div>
      </section>
      <section className="container cta">
        <div className="cta__left">
          <img src={Img5} alt="Stuff" />
        </div>
        <div className="cta__right">
          <strong className="cta__subtitle">
            UN BON ENDROIT POUR COMMENCER
          </strong>
          <h1 className="cta__title">Trouvez votre matelas idéal</h1>
          <p className="cta__desc">
            Vous commencez votre recherche ? Utilisez notre simulateur pour
            trouver un matelas parfaitement adapté à vos besoins – en moins
            d'une minute.
          </p>
          <Link to="/" className="cta__link">
            JE TROUVE MON MATELAS
          </Link>
        </div>
      </section>
      <section className="feature-article container">
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
          <strong className="advantage__subtitle">VOS AVANTAGES</strong>
          <h3 className="advantage__title">Indépendant et 100% gratuit</h3>
          <h4 className="advantage__title2">Des conseils d'experts</h4>
          <p className="advantage__desc">
            Tests, comparatifs, guides d'achats : avec son équipe de testeurs
            indépendants, Sleeps.fr est à votre service pour vous conseiller et
            vous aider à trouver gratuitement les meilleurs produits de literie
            du marché.
          </p>
          <h4 className="advantage__title2">Des outils efficaces</h4>
          <p className="advantage__desc">
            Des comparatifs et des simulateurs vous aideront à choisir une
            literie adaptée à vos besoins et passer les meilleures nuits.
          </p>
          <h4 className="advantage__title2">Un suivi personnalisé</h4>
          <p className="advantage__desc">
            Vous avez une question ? Contactez directement notre équipe
            d'experts en sommeil basée en France et à votre disposition par
            email.
          </p>
        </div>
        <div className="advantage__right">
          <img src={Img6} alt="Stuff" />
        </div>
      </section>
      <section className="container test">
        <div className="test__wrapper">
          <strong className="test__subtitle">NOUS AVONS TESTÉ POUR VOUS</strong>
          <h3 className="test__title">
            Découvrez nos meilleurs choix matelas par catégorie.
          </h3>
          <div className="test__content">
            <Link to="/">
              <span role="img" aria-label="Imoji">
                ☁️
              </span>{" "}
              Mémoire de forme
            </Link>{" "}
            |{" "}
            <Link to="/">
              <span role="img" aria-label="Imoji">
                🙌
              </span>{" "}
              Pour le dos
            </Link>{" "}
            |{" "}
            <Link to="/">
              <span role="img" aria-label="Imoji">
                🙆
              </span>{" "}
              Sur le ventre
            </Link>{" "}
            |{" "}
            <Link to="/">
              <span role="img" aria-label="Imoji">
                💰
              </span>{" "}
              Pas chers
            </Link>{" "}
            |{" "}
            <Link to="/">
              <span role="img" aria-label="Imoji">
                👑
              </span>{" "}
              Haut de gamme
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

const SleepsPage = () => {
  return (
    <Layout>
      <SleepsPageTemplate />
    </Layout>
  );
};

export default SleepsPage;

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
);
