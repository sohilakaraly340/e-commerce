import { Button } from '@mui/material'
import React, { useContext } from 'react'
import { Productcontext } from "../App"
import {data} from "../App"


export default function Category() {

  const {filtcat} = useContext(Productcontext);

  const arrcat = ['all', ...new Set(data.map(i => i.category))]

  return (
    <div>
      <div 
        style={{ display: "flex", 
        justifyContent: "center", 
        margin: "30px 0px", flexWrap: "wrap", 
        gap: "20px" }}>

        {arrcat.map(i => (<Button onClick={()=>filtcat(i)} key={i} variant="outlined" size="medium" style={{ minWidth: "90px", fontSize: "0.7rem" }}>{i}</Button>))}
      </div>

    </div>
  )
}
