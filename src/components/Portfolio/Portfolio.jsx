import SectionTitle from '../SectionTitle/SectionTitle';
import PortfolioItem from './PortfolioItem';
import { portfolioData } from '../../data/portfolioData';
import './Portfolio.css';

const Portfolio = () => {
  return (
    <section className="portfolio section" id="portfolio">
      <div className="container flex-center">
        <SectionTitle title="Portfolio" subtitle="Portfolio" />
        <div className="portfolio-wrapper">
          {portfolioData.map((item, index) => {
            return <PortfolioItem key={item.id} item={item} index={index} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
