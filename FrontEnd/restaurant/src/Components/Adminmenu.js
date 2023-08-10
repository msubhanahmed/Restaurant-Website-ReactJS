import axios from 'axios'
import TopNavigation from '../navbar.js'
import { useState,useRef,useEffect  } from "react";


function AMenu({ menuList, setMenuList }) {
    const [itemnum, setItemnum] = useState(0);
    const currentItem = useRef(menuList.menu[0]);
    
    console.log(itemnum);
    useEffect(() => {
      console.log("ItemNum: ",itemnum);
      console.log("New List: ",menuList);
      currentItem.current = menuList.menu[itemnum];
    }, [itemnum,menuList]);

    // useEffect(() => {
    //   currentItem.current = menuList[itemnum];
    // }, [itemnum, menuList]);

    const handleIncrement = () => {
      if (itemnum < menuList.menu.length - 1) {
        setItemnum(itemnum + 1);
        console.log(itemnum)
      }
    };
  
    const handleDecrement = () => {
      if (itemnum > 0) {
        setItemnum(itemnum - 1);
        console.log(itemnum)
      }
    };
  
    const handleMenuChange = (event) => {
      event.preventDefault();
      const { name, value } = event.target;
      currentItem.current[name] = value;
      // const updatedMenuList = {...menuList};
      // updatedMenuList.menu[itemnum][name] = value;
      setMenuList(menuList);
    };

    const DeleteItem = (index) =>{
        handleDecrement()
        //const updatedMenuList = {menu:[]};
        //const updatedMenuList = menuList.menu.filter(item => item.name !== currentItem.current.name);
        const updatedMenuList = menuList.menu.filter((item, i) => i !== index)
        setMenuList({ menu: updatedMenuList })
        console.log(currentItem)
        console.log(updatedMenuList);
    }

    const CreatenewItem = ()=>{
        // const updatedMenuList = {...menuList};
        // updatedMenuList.menu.push({ name: 'New Product', description: 'Hello World1',category:'Hello1', price: 10 , imageurl: 'New URL' })
        // console.log(updatedMenuList);
        setMenuList(menuList.menu.push({ name: 'New Product', description: 'Hello World1',category:'Hello1', price: 10 , imageurl: 'New URL' }));
    }
    const UploadMenu = () =>
    {
      const newList = {itemsMenu: JSON.stringify(menuList.menu) , menuid: "menu"}
      console.log(newList)
      axios.put('http://localhost:4000/database/update-menu',newList).then(res =>
      {
        console.log(res)
      }).catch(error => console.error(error));
    }
  
    return (
      <>
        <TopNavigation />
        <h1>Manage Menu</h1>
        <div className="form-group mt-5 ml-5 justify-content-center">
          <div className="row mb-2">
            <label htmlFor={`name`} className="col-sm-2 col-form-label">
              Name
            </label>
            <div className="col-sm-4">
              <input
                type="text"
                className="form-control"
                id={`name`}
                name="name"
                value={currentItem.current.name}
                onChange={(event) => handleMenuChange(event)}
              />
            </div>
          </div>
          <div className="row mb-2">
            <label htmlFor={`description`} className="col-sm-2 col-form-label">
              Description
            </label>
            <div className="col-sm-4">
              <input
                type="text"
                className="form-control"
                id={`description`}
                name="description"
                value={currentItem.current.description}
                onChange={(event) => handleMenuChange(event)}
              />
            </div>
          </div>
          <div className="row mb-2">
            <label htmlFor={`category`} className="col-sm-2 col-form-label">
              Category
            </label>
            <div className="col-sm-4">
              <input
                type="text"
                className="form-control"
                id={`category`}
                name="category"
                value={currentItem.current.category}
                onChange={(event) => handleMenuChange(event)}
              />
            </div>
          </div>
          <div className="row mb-4">
            <label htmlFor={`price`} className="col-sm-2 col-form-label">
              Price
            </label>
            <div className="col-sm-4">
              <input
                type="number"
                className="form-control"
                id={`price`}
                name="price"
                value={currentItem.current.price}
                onChange={(event) => handleMenuChange(event)}
              />
            </div>
          </div>
          <div className="row mb-4">
            <label htmlFor={`imageurl`} className="col-sm-2 col-form-label">
              Image URL
            </label>
            <div className="col-sm-4">
              <input
                type="url"
                className="form-control"
                id={`imageurl`}
                name="imageurl"
                value={currentItem.current.imageurl}
                onChange={(event) => handleMenuChange(event)}
              />
            </div>
          </div>
          <div className="row mb-2 mt-2 ml-auto">
            <button className="btn-primary  col-12 col-sm-1" onClick={handleDecrement}>Prev </button>
            <button className="btn-info col-12 col-sm-1" onClick={handleIncrement}>Next</button>
            <button className="btn-success col-12 col-sm-1" onClick={()=> UploadMenu}>Save</button>
            <button className="btn-danger col-12 col-sm-1" onClick={()=> DeleteItem(itemnum)}>Delete</button>
            <button className="btn-danger col-12 col-sm-1" onClick={()=>CreatenewItem}>Add</button>
          </div>
        </div>
      </>
    );
  }
  
export default AMenu;