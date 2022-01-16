import React, { useState } from 'react';
import mdDeal from 'data/mdRecommand.json';

const useMdDeal = () => {
  const [mdDeals] = useState(mdDeal.md_recommend);
  return { mdDeals };
};

export default useMdDeal;
