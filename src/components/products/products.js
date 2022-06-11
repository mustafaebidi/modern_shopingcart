import { useState } from "react"
import { useSelector,useDispatch } from "react-redux"
import Product from "../product/product"
import "./products.css"



const Products=()=>{

    const globalData=useSelector((state)=>state)



    const getData=()=>{
        if(globalData.products.type ==="all" ){
            return globalData.products.items

        }
        let newDate=globalData.products.items.filter((item)=>{
            return item.type === globalData.products.type
        })

        return newDate
    }


    return(
        <div className="products">
            {getData().map((element,index)=>{
                return(
                    <Product key={element.id} index={index} {...element} />
                )

            })}
 
        </div>
    )
}
export default Products