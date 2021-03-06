import { useSelector } from "react-redux"
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
            {getData().map((item,index)=>{
                return(
                    <Product key={item.id} index={index} {...item} />
                )
            })}
 
        </div>
    )
}
export default Products