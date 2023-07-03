'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Toggle = () => {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn(!isOn);
  };

  return (
    <div className="toggle-container">
      <button className={`toggle ${isOn ? 'on' : 'off'}`} onClick={handleToggle}>
        <motion.div
          className="toggle-handle"
          layout
          transition={{ duration: 0.2 }}
          style={{ x: isOn ? '26px' : '0' }}
        />
      </button>
    </div>
  );
};

export default Toggle;


