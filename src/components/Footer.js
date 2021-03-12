import React from "react";
import { Link } from "gatsby";

import {
  FacebookIcon,
  YoutubeIcon,
  PinterestIcon,
  LinkedinIcon,
} from "./icons";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__container">
        <div className="footer__section footer__section--social">
          <h3 className="footer__title">À propos</h3>
          <p>
            Sleeps.fr est le leader de la comparaison de produits de literie sur
            internet. Indépendant et 100% gratuit, notre mission est de vous
            aider à passer les meilleures nuits.
          </p>
          <div className="footer__social-icons">
            <a
              href="https://www.facebook.com/sleeps.fr/"
              target="_blank"
              rel="noreferrer"
            >
              <FacebookIcon />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.youtube.com/channel/UCBlW8CFQ3C0-DJhxskmSUAA"
            >
              <YoutubeIcon />
            </a>
            <a
              href="https://www.pinterest.fr/sleeps_fr/"
              target="_blank"
              rel="noreferrer"
            >
              <PinterestIcon />
            </a>
            <a
              href="https://www.linkedin.com/company/sleeps/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedinIcon />
            </a>
          </div>
        </div>
        <div className="footer__section">
          <h3 className="footer__title">Guides Literie</h3>
          <div className="footer__list">
            <Link to="/tag/meilleurs-matelas">Meilleurs Matelas</Link>
            <Link to="/tag/meilleurs-oreillers">Meilleurs Oreillers</Link>
            <Link to="/tag/meilleurs-sommiers">Meilleurs Sommiers</Link>
            <Link to="/tag/meilleures-couettes">Meilleures Couettes</Link>
            <Link to="/tag/meilleurs-surmatelas">Meilleurs Surmatelas</Link>
            <Link to="/tag/meilleurs-matelas bébé">Meilleurs Matelas Bébé</Link>
          </div>
        </div>
        <div className="footer__section">
          <h3 className="footer__title">Plus d’infos</h3>
          <div className="footer__list">
            <Link to="/blog">Le Blog</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/faq">FAQ</Link>
            <Link to="/mentions-légales">Mentions Légales</Link>
            <Link to="/politique-de-transparence">
              Politique de Transparence
            </Link>
          </div>
        </div>
        <div className="footer__section footer__section--newsletter">
          <h3 className="footer__title">La newsletter Sleeps.fr</h3>
          <p>
            Chaque mois, des réductions exclusives et nos derniers tests
            produits dans votre boîte mail.
          </p>
          <form className="footer__newsletter">
            <input type="text" placeholder="Votre email" />
            <button>Je m'inscris !</button>
          </form>
        </div>
      </div>
    </footer>
  );
}
