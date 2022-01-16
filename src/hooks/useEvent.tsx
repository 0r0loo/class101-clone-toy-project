import React, { useState } from 'react';
import event from 'data/open.json';

const useEvent = () => {
  const [events] = useState(event.popular_event);
  return { events };
};

export default useEvent;
