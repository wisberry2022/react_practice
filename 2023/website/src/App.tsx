import { Route, Routes } from 'react-router-dom';
import First from './First';
import Signup from './Signup';
import './style/App.scss';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<First />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  )
}

export default App;
