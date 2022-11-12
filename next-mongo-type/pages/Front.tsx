import axios from 'axios';
import { useEffect } from 'react';

const Front = () => {
  useEffect(() => {
    axios.get('/api/hello')
      .then((res) => (console.log('first-axios', res)))
    axios.get('/api/getData')
      .then((res) => (console.log('second-axios', res)))
  }, [])

  return (
    <div>
      hello Front!
    </div>
  )
}

export default Front;