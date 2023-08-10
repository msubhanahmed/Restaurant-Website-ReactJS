import React from 'react';
import './App.css';
import TopNavigation from './navbar.js'

const HomePage = ({ Useremail, onLogout }) => {
  return (
    <div>
      <TopNavigation />
      <div className="section">
        <h2>Burgers</h2>
        <p>Our juicy burgers are made from the freshest ingredients and cooked to perfection. Try our classic cheeseburger or go for something more adventurous with our bacon avocado burger.</p>
      </div>
      <div className="section">
        <h2>Pizzas</h2>
        <p>Our pizzas are handcrafted with the finest ingredients and cooked in our wood-fired oven for that perfect crispy crust. Choose from our wide selection of toppings or create your own masterpiece.</p>
      </div>
      <div className="section">
        <h2>Sandwiches</h2>
        <p>Our sandwiches are made with the freshest breads and fillings. From classic turkey and cheese to our signature roasted vegetable and hummus sandwich, we have something for everyone.</p>
      </div>
      <div className="section">
        <h2>Salads</h2>
        <p>Our salads are made with the freshest greens and vegetables, and dressed with our house-made vinaigrettes. Choose from our classic Caesar salad or try something new with our quinoa and roasted vegetable salad.</p>
      </div>
      <div className="section">
        <h2>Desserts</h2>
        <p>Save room for our delicious desserts! From classic apple pie to our rich chocolate lava cake, we have something to satisfy your sweet tooth.</p>
      </div>
    </div>
  );
}

export default HomePage;
