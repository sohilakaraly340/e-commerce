import { Box, Stack } from '@mui/material'
import React, { useContext } from 'react'
import ItemCard from './ItemCard'
import { Productcontext } from "../App"


export default function ItemList() {

  const { items } = useContext(Productcontext);

  const cards = items.map(card => (<ItemCard key={card.id} card={card} />))

  return (

    <Box>
      <Box color="gray" ml="5vw" fontSize="1.8vw">{cards.length} items found </Box>
      <Stack direction="row" gap="50px" display="flex" justifyContent="center" flexWrap="wrap" m="50px">
         {cards} 
      </Stack>
    </Box>



  )
}
