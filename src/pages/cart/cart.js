import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import {increaseQuantity, removeFromCart,decreaseQuantity } from "../../store/productsSlice"
import uuid from 'react-uuid'



import "./cart.css"

const Cart=()=>{



    let navigate = useNavigate();

    const globalData=useSelector((state)=>state.products)

    const getSumOfProducts=()=>{
        let sum=0
        globalData.itemsInCart.forEach(item => {
            sum+=item.quantity*item.price
        });
        return sum
        
    }

    if(globalData.itemsInCart.length){
        return(
            <div className="cart">
                <div className="container">
                    <CartItems/>
                    <div className="checkout">
                        <div>
                            <span className="total-title">TOTAL:$</span>
                            <span className="total">{getSumOfProducts()}</span>
                        </div>
                        <div className="finish">Checkout</div>
                    </div>
                </div>
            </div>

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

const CartItems=()=>{

    const globalData=useSelector((state)=>state.products.itemsInCart)
    const dispath=useDispatch()


    return(
                <div>
                    {globalData.map((item,index)=>{
                        return(
                                <div key={uuid()} className="content">
                                    <div className="close" onClick={(()=>dispath(removeFromCart(index)))}>x</div>
                                    <div className="intro">   
                                        <div className="img-con">
                                            <img alt="" src={`../../../api/${item.type}/${item.name}/main.jpg`}/>
                                        </div>

                                        <div className="name-product">{item.name}</div>
                                    </div>
                                    <div className="attribute">
                                        {Object.keys(item.attribute).map((name,index)=>{
                                            return(
                                                <div key={uuid()}>
                                                    <h3>{name}</h3>
                                                    <div className="choice">
                                                        {item.attribute[name].map((name,index)=>{
                                                            let key=Object.keys(name)[0]
                                                            return(
                                                                <div key={uuid()} className={name[key] ?"active" :""}>{key}</div>
                                                                
                                                            )

                                                        })} 
                                                    </div>
                                                </div>
                                            )
                                        })}

                                    </div>

                                    <div className="control">
                                        <div onClick={()=> dispath(increaseQuantity(index))}>+</div>
                                        <h4>{item.quantity}</h4>
                                        <div onClick={()=> dispath(decreaseQuantity(index))} >-</div>

                                    </div>

                                </div>
                        )
                    })}                
                </div>



    )

}


export default Cart;
