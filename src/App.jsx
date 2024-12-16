import './App.css';
import Main from './Components/Main/Main';
import FilteredProducts from './Components/filterProducts/FilteredProducts';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SingleProduct from "./Components/filterProducts/SingleProduct"
import Login from './Components/Login/Login';
import { useSelector } from 'react-redux';

function App() {
  const user = useSelector((state) => state.user.user);
  const {authUser} = user;
  return (
    <div className='App'>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={authUser ? <Main/>:<Login/>}/>
        <Route path='/filteredProducts/:type' element={<FilteredProducts/>}/>
        <Route path="/filteredProducts/:type/:id" element={<SingleProduct/>}/>
        </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
