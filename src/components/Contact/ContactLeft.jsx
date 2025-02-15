import { motion } from 'motion/react';

import { slideInVariants } from '../../utils/animation';
import { contactsData } from '../../data/contactsData';

const ContactLeft = () => {
  return (
    <div className="contact-left">
      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        variants={slideInVariants('top', 0.7, 50, false)}
      >
        Let's discuss your project
      </motion.h2>
      <ul className="contact-list">
        {contactsData.map((contact, index) => (
          <motion.li
            key={contact.id}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            custom={index}
            variants={slideInVariants('top', 0.7, 50, true)}
          >
            <h3>
              <contact.icon /> {contact.title}
            </h3>
            <span>
              <a href={contact.link}>{contact.value}</a>
            </span>
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default ContactLeft;
