import React from 'react';
import { Carousel, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import TopNavigation from '../navbar.js'
import Slider from 'react-slick';

function MenuCarousel({menuList,productList,setProductList}) {

  const categories = [...new Set(menuList.menu.map(item => item.category))];
  function addItemtocart(item)
  {
    setProductList([...productList,item]);
  }
  
  
  
  return (
    <>
    <TopNavigation />
    {categories.map(category => (
    <div className='section'>
    <h3 className="category-title">{category}</h3>
    <p className="category-description">{`This category contains ${menuList.menu.filter(item => item.category === category).length} items`}</p>
    <div className="d-flex flex-wrap justify-content-between">
    {menuList.menu.filter(item => item.category === category).map(item => (
          <Card className='mx-1'>
            <Card.Img variant="top" src={item.imageurl} />
            <Card.Body>
              <Card.Text>{item.name}</Card.Text>
              <Card.Text className='text-muted text-xs'>{item.description}</Card.Text>
            </Card.Body>
            <Card.Footer className="d-flex justify-content-between align-items-center">
              {/* <span className="badge badge-pill badge-secondary order-last">$<strong>{item.price}</strong></span>
              <Button className='order-first ml-auto' variant="primary" onClick={() => addItemtocart(item)}>Order</Button> */}
                  <span className="badge badge-pill badge-secondary order-1" style={{ height: '100%', width: '30%',fontSize: '18px' }}>$<strong>{item.price}</strong></span>
                  <Button className="order-2 ml-auto" variant="primary" onClick={() => addItemtocart(item)} style={{ height: '100%', width: '50%' }}>
                    Order
                  </Button>
              </Card.Footer>
          </Card>
    ))}
    </div>
    </div>
      ))}
    </>
  );
}

export default MenuCarousel;
