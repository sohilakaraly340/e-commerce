import React, { useContext } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, Stack } from '@mui/material';
import {Productcontext} from "../App"

export default function ItemCard(card) {
  const {inc}=useContext(Productcontext);
  const {getItemQuantity}=useContext(Productcontext);
  const {dec}=useContext(Productcontext);
  const quan = getItemQuantity(card.card.id);

  return (
    <Box >

      <Card sx={{ maxWidth: 345 }}>

        <CardMedia
          component="img"
          alt="green iguana"
          height="500"
          image={card.card.image}
          style={{ width: "100%" ,objectFit: "scale-down " ,height:"300px"}}
        />
        <CardContent>

          <Stack direction="row" justifyContent="space-between" alignItems="baseline">
            <Typography gutterBottom variant="h6" textOverflow="ellipsis" overflow="hidden" whiteSpace="nowrap" pr="20px">
              {card.card.title}
            </Typography>
            
          </Stack>

          <Typography variant="body2" textOverflow="ellipsis" overflow="hidden" whiteSpace="nowrap" color="text.secondary">
           total price :  {quan}*{card.card.price} = {card.card.price*quan}$
          </Typography>

          <Box display="flex" justifyContent="center" m="20px">
    
              <Stack direction="row">
                <Button variant="contained" color='success' style={{ width: "20px" }} onClick={()=>inc(card.card.id)}>+</Button>
                <span style={{ margin: "0px 20px", display: "flex", alignItems: "center" }}>{quan}</span>
                <Button variant="contained" color="error" onClick={()=>dec(card.card.id)}>-</Button>
              </Stack>
            
          </Box>

        </CardContent>

      </Card>

    </Box>
  )
}
