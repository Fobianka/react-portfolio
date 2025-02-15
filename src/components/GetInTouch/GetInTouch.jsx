import { FaPaperPlane } from 'react-icons/fa';
import { motion } from 'motion/react';

import { slideInVariants } from '../../utils/animation';
import './GetInTouch.css';

const GetInTouch = () => {
  return (
    <div className="get-in-touch sub-section">
      <div className="container flex-center">
        <div className="contact-card">
          <motion.div
            className="title"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            variants={slideInVariants('left', 0.7, 90, false)}
          >
            <h4>LET'S TALK</h4>
            <h3>ABOUT YOUR</h3>
            <h2>NEXT PROJECT</h2>
          </motion.div>
          <motion.a
            href="#"
            className="get-in-touch-link inner-info-link"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            variants={slideInVariants('right', 0.7, 90, false)}
          >
            Contact me
            <FaPaperPlane />
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
