import { motion } from 'motion/react';

import { slideInVariants } from '../../utils/animation';
import { skills } from '../../data/skills';

const Skills = () => {
  return (
    <div className="education">
      <h4 className="label">Skills</h4>
      <ul className="bars">
        {skills.map((item, index) => (
          <li className="bar" key={index}>
            <div className="info">
              <span>{item.skill}</span>
              <span>{item.level}</span>
            </div>
            <motion.div
              className="line"
              style={{ width: item.level }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              custom={index}
              variants={slideInVariants('left', 0.7, 10, true)}
            ></motion.div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
