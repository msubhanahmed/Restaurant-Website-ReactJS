
import TopNavigation from '../navbar.js'
import { useState } from "react";
import { Link } from 'react-router-dom';


function Cart({productList}){
	const [subtotal, setSubtotal] = useState(104);

  return (
    <>
    <TopNavigation/>
    <main>
	<div className="heading">
        <img className="heading__image" src={require('../assets/foodcart.jpg')} alt="Cart" />
    </div>
    <div className="container">
		{productList.map((product, index) => (
		<div className="row row-content align-items-center productcontainer mr-3 ml-3">
            <div className="col-12 col-sm-4 col-md-3 order-sm-last">
				<button className='btn-sm btn-danger'>Remove</button>
            </div>
            <div className="col-12 col-sm order-sm-first">
                <div className="media">
                    <img src={require('../assets/img1.jpg')} className="d-flex mr-3 img-sm align-self-center" width={100} height={100}/>
                    <div className="media-body">
                        <h4 className="mt-5 text-left card-title">{product.name}</h4>
                        <p className="mb-0 d-none d-sm-block text-muted text.justify">{product.description}</p>
						            <p className='mb-5 text-justify text-muted'><span>Units: {product.quantity}</span><span className='ml-5'>Price: {product.price}</span></p>
                    </div>
                </div>  
            </div>
        </div>
	  		))}
		<Link className='btn btn-success align-center ml-3 mt-3' to="/checkout">Go to Checkout</Link>
	</div>
    {/* <aside>
      <div className="summary">
        <div className="summary-total-items"><span className="total-items"></span> Cart Summary </div>
        <div className="summary-subtotal">
          <div className="subtotal-title">Subtotal</div>
          <div className="subtotal-value final-value" id="basket-subtotal">{subtotal}</div>
        </div>
		<div className="summary-subtotal">
          <div className="subtotal-title">Tax</div>
          <div className="subtotal-value final-value" id="basket-subtotal">tax</div>
        </div>
        <div className="summary-total">
          <div className="total-title">Total</div>
          <div className="total-value final-value" id="basket-total">{subtotal}</div>
        </div>
        <div className="summary-checkout">
          <button className="checkout-cta">Go to Checkout</button>
        </div>
      </div>
    </aside> */}
  </main>
	</>
  );
};

export default Cart;