import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import './index.css';

function App() {

  return (
    <div className='container-app'>
      <Routes>        
        <Route path='/' element={<><Header/><Main/></>}/>        
      </Routes>
    </div>
  );
}

export default App;