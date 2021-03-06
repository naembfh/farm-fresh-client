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
import Footer from './Pages/Share/Footer/Footer';
import Blogs from './Pages/Blogs/Blogs';
import ContactUs from './Pages/Home/Contact/ContactUs';



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
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/contact' element={<ContactUs></ContactUs>} ></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
     <Footer></Footer>
    </div>
  );
}

export default App;
