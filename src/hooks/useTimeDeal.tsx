import React, { useState } from 'react';
import timeDeal from 'data/timeDeal.json';

const useTimeDeal = () => {
  const [timeDeals] = useState(timeDeal.time_deal);

  return { timeDeals };
};

export default useTimeDeal;
