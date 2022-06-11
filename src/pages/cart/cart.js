import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"


import "./cart.css"

const Cart=()=>{

    let navigate = useNavigate();

    const globalData=useSelector((state)=>state)

    console.log(globalData.products.itemsInCart)

    if(globalData.products.itemsInCart.length){
        return(
            <div>dsada</div>
        )

    }
    else{
        return(
            <div className="empty">
                <div>
                    <img src="../../../image/3d-flame-shopping-cart.png" alt=""/>
                    <h2>Your Card is Empty</h2>

                    <div className="shop" onClick={()=>navigate("/home")}>Go To Shop</div>

                </div>

            </div>
        )

    }


}

export default Cart