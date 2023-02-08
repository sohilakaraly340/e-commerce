import {  Button } from '@mui/material';
import { Stack } from '@mui/system'
import React, { useContext } from 'react'
import { Productcontext } from "../App"
import CheckCart from '../components/CheckCart';


export default function ShoppingCart() {
  const { CartItems } = useContext(Productcontext);
  const { data } = useContext(Productcontext);
  const { getItemQuantity } = useContext(Productcontext);

  var c = [];


  const cards = CartItems.map(item => {
    c = data.find(i => item.id === i.id)
    return <CheckCart key={c.id} card={c} />;
  }
  )
  
  var sum=0;
  CartItems.map( item => {
    c = data.find(i => item.id === i.id)
     return sum += (c.price * getItemQuantity(c.id));
    }
  )
  
  

  return (
    <Stack direction="column" >
      <Stack mt="30px" direction="row" display="flex" justifyContent="center" gap="10px" flexWrap="wrap">
        {cards}

      </Stack>

      {cards.length ?
        <Stack direction="row" display="flex" flexWrap="wrap" alignItems="center" justifyContent="space-evenly" m="50px 100px">
          <h3 style={{color:"blue"}}> Total price : <span style={{color:"#6d6868"}}>{sum.toFixed(2)}$</span></h3>
          <Button variant="contained" style={{ minwidth: "26%" }}><p>checkout</p></Button>
        </Stack>
        :
        <h1 style={{display:"flex" ,justifyContent:"center"}}>no items.. !😥</h1>
      }

    </Stack>

  )
}
