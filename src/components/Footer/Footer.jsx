import { infoLinks, followLinks } from '../../data/footerData';
import FooterLinkGroup from './FooterLinkGroup';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer-wrapper">
        <div className="about-group">
          <h2>Ilay</h2>
          <p>Frontend Developer</p>
          <a href="#about">About me</a>
        </div>
        <div className="hr"></div>
        <FooterLinkGroup title="More" links={infoLinks} isSocial={false} />
        <div className="hr"></div>
        <FooterLinkGroup title="Follow" links={followLinks} isSocial={true} />
      </div>
      <p className="footer-copyright">
        © <span className="year">{currentYear}</span> by Coding Snow. All rights
        reserved.
      </p>
    </footer>
  );
};

export default Footer;
