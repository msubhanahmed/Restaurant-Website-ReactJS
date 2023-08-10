import Login from "./Login.js"
import HomePage from "./home.js"
import Cart from "./Components/cart.js"
import Checkout from "./Components/checkout.js"
import AMenu from "./Components/Adminmenu.js"
import React, { useState ,useEffect } from "react";
import axios from 'axios'
import MenuCarousel from "./Components/viewmenu.js"
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
const App = () => {
  const [Useremail, setUseremail] = useState({
    userid: 0,
    username: null,
    email: null
});
  const [menuList,setMenuList] = useState({ menu: [] });
  const [productList, setProductList] = useState([]);
  const handleLogin = async (Useremail, password) => 
  {
    await axios.get('http://localhost:4000/database/readUser/'+Useremail+'/'+password)
    .then(
      response => {
        console.log(response.data)
        setUseremail(response.data)
      })
    .catch(error => console.error(error));
    console.log(Useremail)

  };

  useEffect(() => {

    setMenuList({menu: [
      {
        "name": "Margherita Pizza",
        "description": "Tomato sauce, mozzarella, and basil on a crispy thin crust.",
        "category": "Pizza",
        "price": 12.99,
        "imageurl": "https://www.dropbox.com/s/vejuvq2vldhjvye/img1.jpg?raw=1"
      },
      {
        "name": "Pepperoni Pizza",
        "description": "Tomato sauce, mozzarella, and pepperoni on a crispy thin crust.",
        "category": "Pizza",
        "price": 14.99,
        "imageurl": "https://www.dropbox.com/s/vejuvq2vldhjvye/img1.jpg?raw=1"
      },
      {
        "name": "Mushroom Pizza",
        "description": "Tomato sauce, mozzarella, and mushrooms on a crispy thin crust.",
        "category": "Pizza",
        "price": 13.99,
        "imageurl": "https://www.dropbox.com/s/vejuvq2vldhjvye/img1.jpg?raw=1"
      },
      {
        "name": "Spaghetti with Meatballs",
        "description": "Spaghetti with meatballs in a tomato sauce.",
        "category": "Pasta",
        "price": 11.99,
        "imageurl": "https://www.dropbox.com/s/vejuvq2vldhjvye/img1.jpg?raw=1"
      },
      {
        "name": "Fettuccine Alfredo",
        "description": "Fettuccine with a creamy parmesan sauce.",
        "category": "Pasta",
        "price": 10.99,
        "imageurl": "https://www.dropbox.com/s/vejuvq2vldhjvye/img1.jpg?raw=1"
      },
      {
        "name": "Penne Arrabiata",
        "description": "Penne with a spicy tomato sauce.",
        "category": "Pasta",
        "price": 9.99,
        "imageurl": "https://www.dropbox.com/s/vejuvq2vldhjvye/img1.jpg?raw=1"
      },
      {
        "name": "Caesar Salad",
        "description": "Romaine lettuce, croutons, parmesan cheese, and caesar dressing.",
        "category": "Salad",
        "price": 7.99,
        "imageurl": "https://www.dropbox.com/s/vejuvq2vldhjvye/img1.jpg?raw=1"
      },
      {
        "name": "Greek Salad",
        "description": "Mixed greens, tomatoes, cucumbers, feta cheese, olives, and greek dressing.",
        "category": "Salad",
        "price": 8.99,
        "imageurl": "https://www.dropbox.com/s/vejuvq2vldhjvye/img1.jpg?raw=1"
      },
      {
        "name": "Cobb Salad",
        "description": "Mixed greens, chicken, bacon, avocado, tomatoes, eggs, and blue cheese dressing.",
        "category": "Salad",
        "price": 9.99,
        "imageurl": "https://www.dropbox.com/s/vejuvq2vldhjvye/img1.jpg?raw=1"
    }
  ]})
    // axios.get('http://localhost:4000/database/readMenu')
    //   .then(response => menuList.menu = (response.data))
    //   .catch(error => console.error(error));

    // console.log(menuList);
  });

  const handleLogout = () => {
    setUseremail(
      {
      userid: 0,
      username: null,
      email: null
      });
  };

  return (
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element ={<HomePage Useremail={Useremail} onLogout={handleLogout} /> }/>
	      <Route exact path="/login" element ={Useremail? <HomePage Useremail={Useremail} onLogout={handleLogout} />:<Login onLogin={handleLogin} /> }/>
        <Route exact path="/cart" element ={Useremail? <Cart productList={productList}/>:<Login onLogin={handleLogin} /> }/>
        <Route exact path="/checkout" element ={<Checkout />}/>
        <Route exact path="/account" element ={Useremail.email == null?<Login onLogin={handleLogin}/>:<HomePage Useremail={Useremail} onLogout={handleLogout} />}/>
        <Route exact path="/menu" element ={Useremail.email!=="rzg@gmail.com"? <MenuCarousel menuList={menuList} productList={productList} setProductList={setProductList}/>:<AMenu menuList={menuList} setMenuList={setMenuList}/>}/>
        {/* <Route exact path="/menu" element ={<AMenu menuList={menuList} setMenuList={setMenuList}/>}/> */}
      </Routes>
      </BrowserRouter>
  );
};

export default App;