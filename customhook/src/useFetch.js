import { useState } from 'react';

const usePlus = (num) => {
  const [cnt, setPlus] = useState(num);

  const plusOne = (idx) => (idx += 1)

  return [num, plusOne];
}

export default usePlus;