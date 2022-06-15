import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"


import "./cart.css"

const Cart=()=>{

    let navigate = useNavigate();

    const globalData=useSelector((state)=>state)

    console.log(globalData.products.itemsInCart)

    if(globalData.products.itemsInCart.length){
        return(
            <div className="container">
                <CartItems/>
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


    return(

                <div>
                    {globalData.map((item)=>{

                        return(
                
                                <div className="content">

                                    <div className="po">   
                                        <div className="img-con">
                                            <img alt="" src={`../../../api/${item.type}/${item.name}/main.jpg`}/>
                                        </div>

                                        <div className="name-product">{item.name}</div>

                                    </div>


                                    <div className="attribute">
                                        {Object.keys(item.attribute).map((name)=>{

                                            
                                            return(
                                                <div>
                                                    <h3>{name}</h3>
                                                    <div className="choice">
                                                        {item.attribute[name].map((name,index)=>{
                                                            let key=Object.keys(name)[0]
                                                            return(
                                                                <div className={name[key] ?"active" :""}>{key}</div>
                                                                
                                                            )

                                                        })} 
                                                    </div>
                                                </div>

                                            )

                                        })}
                

                                    </div>



                                    <div className="control">
                                        <div>+</div>
                                        <h4>55</h4>
                                        <div>-</div>

                                    </div>

                                </div>
                    
                        )


                    })}                

                </div>



    )

}

export default Cart