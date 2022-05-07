import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import Home from './Pages/Home/Home/Home';
import { ToastContainer } from 'react-toastify';
import Header from './Pages/Share/Header/Header';
import AddNewItem from './Pages/AddNewItem/AddNewItem';
import RequireAuth from './Pages/Login/Login/RequireAuth/RequireAuth';
import ItemDetail from './Pages/ItemDetail/ItemDetail';
import NotFound from './Pages/NotFound/NotFound';
import MyItem from './Pages/MyItem/MyItem';
import 'react-toastify/dist/ReactToastify.css';
import ManageInventory from './Pages/ManageInventory/ManageInventory';



function App() {
 
  return (
    <div >
      <Header></Header>
    
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/additem' element={<AddNewItem></AddNewItem>}></Route>
        <Route path='/inventory/:id' element={
          <RequireAuth>
           <ItemDetail></ItemDetail> 
          </RequireAuth>
        }></Route>
        <Route path='/myitem' element={
          <RequireAuth>
           <MyItem></MyItem> 
          </RequireAuth>
        }></Route>
        <Route path='manageInventory' element={
          <RequireAuth>
            <ManageInventory></ManageInventory>
          </RequireAuth>
        }></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
     
    </div>
  );
}

export default App;
