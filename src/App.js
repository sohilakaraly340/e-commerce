import { Box } from '@mui/material';
import React, { createContext, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './pages/Home';
import ShoppingCart from './pages/ShoppingCart';
import "./App.css";

export const Productcontext = createContext();

export var data=[];
function App() {
 
  const [items, setItems] = useState([]);
  const [CartItems ,setCartItems]=useState([]);

  const fetchData = () => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => {
        setItems(json)
        return data=json
      })
  }

  useEffect(() => {
    fetchData();
  }, [])

  const inc= (id)=>{
    setCartItems((curr)=>{
      if( curr.find((i)=> i.id ===id)==null){
        return [...curr, {id , quantity :1  }]
      }else{
        return curr.map((i) => {
          if(i.id === id ){
            return {...i , quantity: i.quantity + 1}
          }else{
            return i;
          }
        })
      }
    })
    
  }


  const dec = (id) => {
    setCartItems((curr) => {
      if (curr.find((i) => i.id === id)?.quantity === 1) {
        return curr.filter((i) => i.id !== id);
      } else {
        return curr.map((i) => {
          if (i.id === id) {
            return { ...i, quantity: i.quantity - 1 };
          } else {
            return i;
          }
        });
      }
    });
  };

  const getItemQuantity = (id) => {
    return CartItems.find((item) => item.id === id)?.quantity || 0;
  };

  const filtcat= (cat)=>{
    if(cat === 'all'){
       setItems(data)
    }
    else{
      const newarr=data.filter((i)=> i.category === cat)
      setItems(newarr)
    }

  }



  return (
    <Productcontext.Provider value={{items,CartItems , inc ,dec ,getItemQuantity ,filtcat ,data}}>
      <Box>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='cart' element={<ShoppingCart />} />
        </Routes>
      </Box>
    </Productcontext.Provider>
  );
}

export default App;
