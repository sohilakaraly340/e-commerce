import { ShoppingBagOutlined } from '@mui/icons-material'
import { Stack } from '@mui/material'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../img/Logo.png'
import { Productcontext } from "../App"
export default function Nav() {
    const { CartItems } = useContext(Productcontext);
    return (
        <Stack direction="row" justifyContent="space-between" style={{
            position: 'sticky', top: '0',
            boxShadow: " rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px",
            backgroundColor: "white", height: '80px', zIndex: '1'
        }}>

            <Link to="/">
                <img src={Logo} alt="logo" style={{ width: '60px', height: '60px', margin: '10px 20px' }} />
            </Link>
{/* 
            <Link to="/">
                Home
            </Link> */}

            <Link to="cart">
                <div style={{ position: "relative" }}>
                    <ShoppingBagOutlined style={{ width: '50px', marginTop: "27px", marginr: '20px', color: "#1A77D2" }} />
                    <div style={{
                        borderRadius: '50px', width: "16px",
                        color: "white", backgroundColor: "red",
                        position: "absolute", bottom: "-2px", right: "8px",
                        display: "flex", justifyContent: "center"
                    }}>
                        {CartItems.length}
                    </div>
                </div>
            </Link>

        </Stack>
    )
}
