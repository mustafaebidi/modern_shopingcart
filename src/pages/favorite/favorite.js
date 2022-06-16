import { useSelector } from "react-redux"
import Product from "../../components/product/product"


import uuid from 'react-uuid'


const Favorite=()=>{
    const globalData=useSelector((state)=>state.products.itemsInFavorite)

    console.log(globalData)
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