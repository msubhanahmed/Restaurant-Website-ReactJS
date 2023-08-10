import './checkoutcss.css';

const Cart = ({productList}) => {
  
  return (
    <>
    <div className='checkoutcontainer'>
        <div className='window'>
            <div className='order-info'>
            <div className='order-info-content'>
                <h2>Order Summary</h2>
                <div className='line'></div>
                <table className='order-table'>
                <tbody>
                    <tr>
                    <td><img src='https://dl.dropboxusercontent.com/s/sim84r2xfedj99n/%24_32.JPG' className='full-width'></img>
                    </td>
                    <td>
                        <br/> <span className='thin'>Nike</span>
                        <br/> Free Run 3.0 Women<br/> <span className='thin small'> Color: Grey/Orange, Size: 10.5<br/><br/></span>
                    </td>

                    </tr>
                    <tr>
                    <td>
                        <div className='price'>$99.95</div>
                    </td>
                    </tr>
                </tbody>

                </table>
                <div className='line'></div>
                <div className='total'>
                <span>
                    <div className='thin dense'>VAT 19%</div>
                    <div className='thin dense'>Delivery</div>
                    TOTAL
                </span>
                <span>
                    <div className='thin dense'>$68.75</div>
                    <div className='thin dense'>$4.95</div>
                    $435.55
                </span>
                </div>
        </div>
        </div>
                <div className='credit-info'>
                <div className='credit-info-content'>
                    <img src='https://dl.dropboxusercontent.com/s/ubamyu6mzov5c80/visa_logo%20%281%29.png' height='80' className='credit-card-image' id='credit-card-image'></img>
                    Card Number
                    <input className='input-field'></input>
                    Card Holder
                    <input className='input-field'></input>
                    <table className='half-input-table'>
                    <tr>
                        <td> Expires
                        <input className='input-field'></input>
                        </td>
                        <td>CVC
                        <input className='input-field'></input>
                        </td>
                    </tr>
                    </table>
                    <button className='pay-btn'>Checkout</button>

                </div>

                </div>
            </div>
        </div>
    
    </>
  );
};

export default Cart;