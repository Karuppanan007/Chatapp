import React from 'react';
import { motion } from 'framer-motion';

const Message = ({ text }) => {
  return (
    <motion.div
      className="p-3 bg-gray-200 rounded-lg shadow-md w-max"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
    >
      {text}
    </motion.div>
  );
};

export default Message;
