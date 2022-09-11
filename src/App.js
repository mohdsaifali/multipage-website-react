import './App.css';
import Nav from './components/Nav';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './components/Home';
import Footer from './components/Footer';
import Header from './components/Header';
import Category1 from './category/Category1';
import Singlepage from './components/Singlepage';
import Category2 from './category/Category2';
import Category3 from './category/Category3';
import Product1 from './products/Product1';
import Product2 from './products/Product2';
import Product3 from './products/Product3';
import Signup from './components/Signup';
import Login from './components/Login';
function App() {
  return (
    <div className="App">
      <BrowserRouter> 
      <Header/>
    <Nav/>
    <Routes> 
      <Route path='/' element = {<Home/>}/>
      <Route path='/' element = {<h1>Category</h1>}/>
      <Route path='/cat1' element = {<Category1/>}/>
      <Route path='/cat2' element = {<Category2/>}/>
      <Route path='/cat3' element = {<Category3/>}/>

      <Route path='/' element = {<h1>Product page</h1>}/>
      <Route path='/product1' element = {<Product1/>}/>
      <Route path='/product2' element = {<Product2/>}/>
      <Route path='/product3' element = {<Product3/>}/>

    <Route path='/other' element = {<Singlepage/>}/>
    <Route path='/signup' element = {<Signup/>}/>
    <Route path='/login' element = {<Login/>}/>

      {/* <Route path='/food' element = {<h1>food page</h1>}></Route> */}
       </Routes>
    
    
    <Footer/>
    </BrowserRouter>
    
    </div>
  );
}

export default App;
