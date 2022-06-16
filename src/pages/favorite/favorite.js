import { useSelector } from "react-redux"
import Product from "../../components/product/product"


import uuid from 'react-uuid'
import "./favorite.css"

const Favorite=()=>{
    const globalData=useSelector((state)=>state.products.itemsInFavorite)

    return(

            <div className="favorite">
                <div className="container">
                    {globalData.map((item)=>{
                        return(
                            <Product key={uuid()} {...item} />
                        )

                    })}
                </div>
            </div>
        

    )
}
export default Favorite