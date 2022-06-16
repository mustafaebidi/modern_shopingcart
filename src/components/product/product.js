import { Link, useLocation } from 'react-router-dom';


import "./product.css"
import {ReactComponent as ReactLogo} from "../../heart2.svg"
import { useDispatch } from 'react-redux';
import { addToCart, addToFavorite, removeFromFavourite } from '../../store/productsSlice';



const Product=({name,type,price,id,atrubite})=>{

    const location=useLocation()

    const dispath=useDispatch()

    const addToCard=(e)=> {
        e.preventDefault()

        let numberOfAttributs=Object.keys(atrubite).length
        let values = new Array(numberOfAttributs).fill(0)
        
        dispath(addToCart({id,values}))

    }

    const addToFavoritee= (e) => {
        e.preventDefault()

        dispath(addToFavorite(id))

    }

    const removeFromFavouritee=(e)=>{

        e.preventDefault()

        dispath(removeFromFavourite(id))

    }
    
    return(
        <div className="product">
            
            <Link to={`/item/${id}`} >


                {location.pathname === "/favorite" 

                    ? <div className='close' onClick={(e)=>removeFromFavouritee(e)}>x</div> 
                
                    :<div  className='con-svg' onClick={(e)=>addToFavoritee(e)} >
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

                        <div className="add-to" onClick={(e)=>addToCard(e)}>Add to cart</div>
                    </div>

                </div>

            </Link>

        </div>
    )

}

export default Product