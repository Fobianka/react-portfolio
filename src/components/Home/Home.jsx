import { FaFacebookF, FaInstagram, FaGithub } from 'react-icons/fa';
import { FaCircleArrowRight, FaArrowDown } from 'react-icons/fa6';
import { motion } from 'motion/react';

import { mainImg } from '../../assets/images';
import { iconVariants, slideInVariants } from '../../utils/animation';
import './Home.css';

const icons = [
  { id: 1, href: '', icon: <FaFacebookF /> },
  { id: 2, href: '', icon: <FaInstagram /> },
  { id: 3, href: '', icon: <FaGithub /> },
];

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="container home-wrapper">
        <div className="media-icons">
          {icons.map((icon, index) => (
            <motion.a
              href={icon.href}
              key={icon.id}
              custom={index}
              variants={iconVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
            >
              {icon.icon}
            </motion.a>
          ))}
        </div>
        <div className="home-info">
          <motion.h1
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            custom={0}
            variants={slideInVariants('left', 0.5, 50, true)}
          >
            Hi, I am Ilay
          </motion.h1>
          <motion.h3
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            custom={1}
            variants={slideInVariants('left', 0.7, 60, true)}
          >
            Front-end Developer
          </motion.h3>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            custom={2}
            variants={slideInVariants('left', 0.9, 80, true)}
          >
            I create stunning websites for your business, Highly experienced in
            web design and development
          </motion.p>
          <motion.a
            href="#"
            className="home-info-link inner-info-link"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            custom={4}
            variants={slideInVariants('left', 0.9, 100, true)}
          >
            Contact me
            <FaCircleArrowRight />
          </motion.a>
        </div>
        <motion.div
          className="home-img"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          variants={slideInVariants('right', 0.9, 150, false)}
        >
          <img src={mainImg} alt="man" />
        </motion.div>
      </div>
      <motion.a
        href="#about"
        className="scroll-down"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        variants={slideInVariants('bottom', 0.9, 100, false)}
      >
        Scroll down
        <FaArrowDown />
      </motion.a>
    </section>
  );
};

export default Home;
