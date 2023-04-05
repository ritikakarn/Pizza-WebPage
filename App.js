import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './Components/Navbar';
import Order_Pizza from './Components/Order_Pizza';
import BuildUr_Pizza from './Components/BuildUr_Pizza';
import HomePage from './Homepage';


function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Navbar/>

        <Routes>

          <Route path='/HomePage' Component={HomePage} />

          <Route path='/Order_Pizza' Component={Order_Pizza} />

          <Route path='/BuildUr_Pizza' Component={BuildUr_Pizza} />

        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;

