import { Link, useLocation } from 'react-router-dom';


import "./product.css"
import {ReactComponent as ReactLogo} from "../../heart2.svg"
import { useDispatch } from 'react-redux';
import { addToCart, addToFavorite, removeFromFavourite } from '../../store/productsSlice';



const Product=({name,type,price,id,atrubite})=>{

    const location=useLocation()

    const dispath=useDispatch()





    return(
        <div className="product">
            
            <Link to={`/item/${id}`} >


                {location.pathname === "/favorite" 

                    ? <div className='close' onClick={(e)=>{
                        e.preventDefault()
                        dispath(removeFromFavourite(id))



                    }}>x</div> 
                
                    :<div  className='con-svg' onClick={(e)=>{
                        e.preventDefault()
                        dispath(addToFavorite(id))
                    }} >
                        <ReactLogo/>
                    </div>
                }


                <div className="con-img">
                    <img src={`../../../api/${type}/${name}/main.jpg`} alt=""  />
                </div>

                <div className="info">
                    <h4 className="product-name">{name}</h4>
                
                    <div className="buy">
                        <div className="price">
                            <span className="price-title">Price</span>
                            <span className="price-num">{price}</span>
                        </div>

                        <div className="add-to" onClick={(e)=>{
                            e.preventDefault()
                            let numberOfAttributs=Object.keys(atrubite).length
                            let values = new Array(numberOfAttributs).fill(0)
                            
                            dispath(addToCart({id,values}))

                        }}>Add to cart</div>
                    </div>

                </div>

            </Link>

        </div>
    )

}

export default Product