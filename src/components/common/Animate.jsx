import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

export default function Animate({ children, type }) {
  switch (type) {
    case 'rotate':
    case 'slide':
    case 'scale':
    default:
      return (
        <motion.div whileHover={{ scale: 1 }} whileTap={{ scale: 0.9 }}>
          {children}
        </motion.div>
      );
  }
}

Animate.propTypes = {
  children: PropTypes.node,
  type: PropTypes.oneOf(['slide', 'scale', 'rotate']),
};

Animate.defaultProps = {
  type: 'scale',
};
