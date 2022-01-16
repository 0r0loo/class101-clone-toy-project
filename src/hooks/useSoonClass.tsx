import React, { useState } from 'react';
import commingSoon from 'data/commingSoon.json';

const useSoonClass = () => {
  const [soonClasses] = useState(commingSoon.open_soon);
  return { soonClasses };
};

export default useSoonClass;
