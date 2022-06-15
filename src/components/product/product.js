import { Link } from 'react-router-dom';


import "./product.css"
import {ReactComponent as ReactLogo} from "../../heart2.svg"
import { useDispatch,useSelector } from 'react-redux';
import { addToCart } from '../../store/productsSlice';



const Product=({name,type,price,id})=>{

    const globalData=useSelector((state)=>state)

    const dispath=useDispatch()


    const addToCard=(e)=>{
        e.preventDefault()
        console.log(globalData.products.itemsInCart)
        dispath(addToCart(id))

    }
    
    return(
        <div className="product">
            
            <Link to={`/item/${id}`}>
                <div  className='con-svg' >
                    <ReactLogo/>
                </div>
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