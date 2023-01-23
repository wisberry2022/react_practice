import { Route, Routes } from 'react-router-dom';
import First from './First';
import Signup from './Signup';
import Login from './Login';
import './style/App.scss';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<First />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  )
}

export default App;
