import { Route, Routes } from 'react-router-dom';
import Proyecto from './components/Proyecto';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Proyecto />} />
      </Routes>
    </div>
  );
};

export default App;
