import React from "react";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Badge} from "@mui/material";
import { UseSelector, useSelector } from "react-redux";


export const Navbar = () => {
    const {quantity} = useSelector((store) => store.cart);
  return (
    <nav>
      <div className="navDiv">
        <h3>Course App</h3>
        <div>
        <Badge color="secondary" badgeContent={quantity} showZero style={{marginTop:'1.3rem'}}>
            <ShoppingBasketIcon />
        </Badge>
        </div>
      </div>
    </nav>
  );
};
